const axios = require('axios')

// const getTips = () => axios({
//   url: 'https://zhxg.whut.edu.cn/yqtjwx/getTips',
//   method: 'get',
//   headers: {
//     'Host': 'zhxg.whut.edu.cn',
//     'Connection': 'keep-alive',
//     'encode': true,
//     'cookie': 'JSESSIONID=fb44b4d2-4237-4ead-af70-84dac1413663',
//     'charset': 'utf-8',
//     'x-tag': 'flyio',
//     'content-type': 'application/json',
//     'User-Agent': 'Mozilla/5.0 (Linux; Android 7.1.2; M2007J3SC Build/N6F26Q; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3185 MMWEBSDK/20220105 Mobile Safari/537.36 MMWEBID/8618 MicroMessenger/8.0.19.2080(0x2800133D) Process/appbrand0 WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
//     'Accept-Encoding': 'gzip,compress,br,deflate',
//     'Referer': 'https://servicewechat.com/wxa0738e54aae84423/21/page-frame.html',
//   }
// })

// 私密信息，通过 Github secrets 填入
const cookie = process.env.COOKIE

const monitorRegister = () => axios({
  url: 'https://zhxg.whut.edu.cn/yqtjwx/monitorRegister',
  method: 'post',
  headers: {
    'Host': 'zhxg.whut.edu.cn',
    'Connection': 'keep-alive',
    'Content-Length': '452',
    'encode': true,
    'cookie': cookie,
    'charset': 'utf-8',
    'x-tag': 'flyio',
    'content-type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 7.1.2; M2007J3SC Build/N6F26Q; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3185 MMWEBSDK/20220105 Mobile Safari/537.36 MMWEBID/8618 MicroMessenger/8.0.19.2080(0x2800133D) Process/appbrand0 WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'Referer': 'https://servicewechat.com/wxa0738e54aae84423/21/page-frame.html',
  },
  data: {
    "equipments":"Redmi-M2007J3SC",
    "diagnosisName":"",
    "relationWithOwn":"",
    "currentAddress":"湖北省武汉市洪山区桂竹园南路",
    "remark":"",
    "healthInfo":"正常",
    "isDiagnosis":0,
    "isFever":0,
    "isInSchool":1,
    "isLeaveChengdu":0,
    "isSymptom":"0",
    "temperature":"36\"C~36.5°C",
    "province":"湖北省",
    "city":"武汉市",
    "county":"洪山区"
  }
})

const main = async () => {
  try {
    const rst = await monitorRegister()
    console.dir(rst)
  } catch (ex) {
    console.dir(ex)
  }
}

main()