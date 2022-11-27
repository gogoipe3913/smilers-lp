require 'dotenv/load'
require 'net/ftp'
require 'pry-byebug'

def rm(path)
  @ftp.chdir File.dirname(path)
  @ftp.delete File.basename(path)
end

def directory?(path)
  @ftp.chdir(path)
  return true
rescue Net::FTPPermError
  return false
end

def rm_r(path)
  if directory?(path)
    begin
      files = @ftp.nlst
      files.each { |file|
        next if file == "." or file == ".."
        rm_r file
      }
    rescue Net::FTPTempError
      # maybe all files were deleted already
    end
    @ftp.chdir('..')

    begin
      @ftp.rmdir path
      puts "removed dir: #{path}"
    rescue => e
      binding.pry
    end
  else
    rm(path)
    puts "removed file: #{path}"
  end
end

def mkdir_p(path)
  paths = []
  path.split('/').each do |p|
    paths << p
    np = paths.join('/')
    begin
      @ftp.chdir("/#{np}")
    rescue
      @ftp.mkdir(np)
    end
  end
end

def copy_dir(dir, remote_path = '')
  puts remote_path
  puts @ftp.pwd
  unless remote_path == ''
    mkdir_p(remote_path)
    @ftp.chdir(remote_path)
  end
  Dir["#{dir}/*"].select {|entry| File.file?(entry) }.each do |entry|
    puts [entry, File.basename(entry)]
    @ftp.put(entry, File.basename(entry))
  end
  Dir["#{dir}/*"].select {|entry| File.directory?(entry) }.each do |entry|
    copy_dir(entry, "#{remote_path}/#{entry}")
  end
end

Net::FTP::FTP_PORT = ENV['FTP_PORT']
@ftp = Net::FTP.new(ENV['FTP_HOST'], ssl: {verify_mode: OpenSSL::SSL::VERIFY_NONE}, debug_mode: false, username: ENV['FTP_USER'], password: ENV['FTP_PASS'])
@ftp.passive = true
@ftp.binary = true
@ftp.chdir('/')
files = @ftp.nlst('*')
puts files
ignore = ['movies', 'PHPMailer']
(files - ignore).each do |file|
  unless /\.php$/.match(file)
    puts file
    rm_r(file)
  end
end

# copy_dir("../public")