# start

```shell
yarn
yarn start # server starts at http://0.0.0.0:8000/
```

# deploying

```shell
# clean previous files
yarn clean

# clean previous files at remote dev
aws s3 rm s3://sp-preview --recursive

# build
yarn build

# upload to remote dev http://sp-preview.s3-website-ap-northeast-1.amazonaws.com/
aws s3 sync public s3://sp-preview --include "*" --acl public-read
```
