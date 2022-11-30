import NasuSupervisorSrc from "../../../images/recruitment/winners/supervisor.png";
import Pickup1 from "../../../images/recruitment/winners/pickup1.png";
import Pickup2 from "../../../images/recruitment/winners/pickup2.png";
import Pickup3 from "../../../images/recruitment/winners/pickup3.png";
import GisiThumb from "../../../images/recruitment/winners/channelGisiThumb.png";
import UnparunpaThumb from "../../../images/recruitment/winners/channelUnparunpaThumb.png";

import LeoTheSupervisorSrc from "../../../images/recruitment/revengers/Leoza.png";
import LeoPickup1 from "../../../images/recruitment/revengers/pickup1.png";
import LeoPickup2 from "../../../images/recruitment/revengers/pickup2.png";
import LeoPickup3 from "../../../images/recruitment/revengers/pickup3.png";
import SorathiThumb from "../../../images/recruitment/revengers/sorathi.png";
import WakkyaiThumb from "../../../images/recruitment/revengers/wakkyai.png";
import { TeamIntroductionProps } from ".";

export const winnersData: TeamIntroductionProps = {
  index: "01",
  id: "eFootball",
  title: {
    subText: "YouTube最強軍団",
    text: "WINNER'S",
  },
  supervisor: {
    image: {
      url: NasuSupervisorSrc,
      alt: "那須監督写真",
    },
    name: "那須大亮",
    resistor: "42.2万人",
  },
  movies: [
    {
      thumbnail: {
        url: Pickup1,
        alt: "ピックアップ動画1のサムネイル画像",
      },
      infomation: {
        views: "24万 回視聴",
        postedTime: "・17時間前（22/11/17現在）",
      },
      caption: "意見の衝突。互いにのしかかるのは「WINNER'S」であるという責任。",
    },
    {
      thumbnail: {
        url: Pickup2,
        alt: "ピックアップ動画2のサムネイル画像",
      },
      infomation: {
        views: "141万 回視聴",
        postedTime: "・8か月前（22/11/17現在）",
      },
      caption: "芸術ボレー炸裂！ボレーシュート対決！！【番外編】",
    },
    {
      thumbnail: {
        url: Pickup3,
        alt: "ピックアップ動画3のサムネイル画像",
      },
      infomation: {
        views: "136万 回視聴",
        postedTime: "・9か月前（22/11/17現在）",
      },
      caption: "【ガチ】この動画でFKを誰が蹴るか決めたいと思います。",
    },
  ],
  channels: [
    {
      thumbnail: {
        url: GisiThumb,
        alt: "ぎしのサムネイル",
      },
      position: "SH",
      name: "ぎし",
      resistor: "243万人",
      link: "https://www.youtube.com/@Banbanzai",
    },
    {
      thumbnail: {
        url: UnparunpaThumb,
        alt: "ウンパルンパのサムネイル",
      },
      position: "MF",
      name: "ウンパルンパ",
      resistor: "65.9万人",
      link: "https://www.youtube.com/@user-bz5lj9fs5b",
    },
  ],
  allResistor: "569.2万人",
  link: {
    messages: ["100万再生を超える動画多数"],
    url: "https://www.youtube.com/@official_eFootball",
  },
};

export const revengersData: TeamIntroductionProps = {
  index: "02",
  id: "REVENGER'S",
  title: {
    subText: "WINNER'S最大のライバル",
    text: "REVENGER'S",
  },
  supervisor: {
    image: {
      url: LeoTheSupervisorSrc,
      alt: "Leo the football監督写真",
    },
    name: "Leo the football",
    resistor: "5.43万人",
  },
  movies: [
    {
      thumbnail: {
        url: LeoPickup1,
        alt: "ピックアップ動画1のサムネイル画像",
      },
      infomation: {
        views: "19万 回視聴",
        postedTime: "・3日前（22/11/17現在）",
      },
      caption:
        "【試合フル】新メンバー候補生の最終試練！相手は関東社会人リーグ1部所属の超…",
    },
    {
      thumbnail: {
        url: LeoPickup2,
        alt: "ピックアップ動画2のサムネイル画像",
      },
      infomation: {
        views: "22万 回視聴",
        postedTime: "・2週間前（22/11/17現在）",
      },
      caption:
        "順調に進むリーグ戦への練習会。それぞれが成長を遂げる中、突如として訪れる戦…",
    },
    {
      thumbnail: {
        url: LeoPickup3,
        alt: "ピックアップ動画3のサムネイル画像",
      },
      infomation: {
        views: "22万 回視聴",
        postedTime: "・3週間前（22/11/17現在）",
      },
      caption:
        "【AJ退団】夏の大会以来姿が見えなかったAJ。REVENGER’Sと自分たちの今後…",
    },
  ],
  channels: [
    {
      thumbnail: {
        url: SorathiThumb,
        alt: "そらちぃのサムネイル",
      },

      name: "そらちぃ",
      resistor: "136万人",
      link: "https://www.youtube.com/@avntisdouga",
    },
    {
      thumbnail: {
        url: WakkyaiThumb,
        alt: "わっきゃいのサムネイル",
      },
      position: "GK",
      name: "わっきゃい",
      resistor: "73万人",
      link: "https://www.youtube.com/@wakkyai",
    },
  ],
  allResistor: "345.1万人",
  link: {
    messages: ["チャンネル開設3ヶ月", "10万再生を超える動画多数"],
    url: "https://www.youtube.com/@revengers9239",
  },
};
