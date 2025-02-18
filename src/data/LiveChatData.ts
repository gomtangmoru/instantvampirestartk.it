export interface LiveChatDataInterface {
  phone: string;
  message: string;
}

const LiveChatData: LiveChatDataInterface[] = [
  {
    phone: '9903',
    message: '저희 아이가 좋아해요 ^^',
  },
  {
    phone: '43**',
    message: '아이 영양간식으로 좋아요 ^^',
  },
  {
    phone: '88**',
    message: '아이 술안주로 최고!',
  },
  {
    phone: '93**',
    message: '에너지드링크 대체용으로 최고에요!'
  }
];

export default LiveChatData;
