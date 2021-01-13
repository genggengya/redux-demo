import Mock from 'mockjs'
import axios from 'axios'

// 生成数据列表
const generateList = () => {
  const tempList = [];
  const count = 20
  for (let i = 0; i < count; i++) {
    const listItem = Mock.mock({
      'id': '@id',
      'name': '@cname',
      "date": "@date()",// 随机生成日期
      'Address': '@county(true)', // 生成省 市 县组成的地址
      'Email': '@email',// 生成邮箱
      "avatar": "@image('200x200','red','#fff','avatar')",// 生成图片
      "description": "@cparagraph()",// 描述中文
    });
    tempList.push(listItem);
  }
  return tempList;
}

Mock.mock('https://www.test.com',{
   "userInfo": generateList()
})

class Api {
  static getList (data) {
    return axios.get('https://www.test.com')
    .then(function (response) {
      if (response.data && response.data.userInfo && Array.isArray(response.data.userInfo)) {
        return response.data.userInfo
      }
      return []
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  static getDetail (id) {
    return axios.get('https://www.test.com')
    .then(function (response) {
      if (response.data && response.data.userInfo && Array.isArray(response.data.userInfo)) {
        let resultData = response.data.userInfo.filter(item => item.id === id)
        if (resultData.length > 0) {
          return resultData
        }
        return []
      }
      return []
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  static detelteById (id) {
    return axios.get('https://www.test.com')
    .then(function (response) {
      if (response.data && response.data.userInfo && Array.isArray(response.data.userInfo)) {
        let resultIndex = response.data.userInfo.findIndex(item => item.id === id)
        let dataVar = [...response.data.userInfo]
        if (resultIndex !== -1) {
          dataVar.splice(resultIndex, 1)
          return dataVar
        }
        return []
      }
      return []
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  static putById (data) {
    return axios.get('https://www.test.com')
    .then(function (response) {
      if (response.data && response.data.userInfo && Array.isArray(response.data.userInfo)) {
        let resultIndex = response.data.userInfo.findIndex(item => item.id === data.id)
        if (resultIndex !== -1) {
          response.data.userInfo[resultIndex] = {...data}
          return response.data.userInfo
        }
        return []
      }
      return []
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default Api