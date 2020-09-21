import React from 'react'
import { Button, Table, Upload } from 'antd'

export default class Snow extends React.Component{
  render() {
    const props = {
      name: 'file',
      action: 'https://zbdx.jzjtong.com/o2o-admin/v1/h5Activity/importActivityGoods',
      headers: {
        Authorization: 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhZG1pbiIsInJlYWxOYW1lIjoi6IC_5YW16LaFIiwiYWRtaW5Sb2xlcyI6IltcIkRKQ1dcIixcIkNXU0hcIixcIkRKMDAxXCIsXCJTSkZYXCIsXCJUR1RaXCIsXCJDV0RaXCIsXCJUR1lZXCIsXCJDV0NaXCIsXCJIUzAwMVwiLFwidGVuYW50XCIsXCJNRFlZXCIsXCJXQUtGXCIsXCJESjAwMlwiLFwiQkhZWVwiLFwiV0FZWVwiXSIsImFkbWluX2FjY291bnRfcmVsYXRlIjoie1wiWkJESlwiOlt7XCJyZWxhdGVUeXBlXCI6MSxcInJlbGF0ZUlkXCI6W1wiMjNcIixcIjI1XCIsXCIyNlwiLFwiMjdcIixcIjI4XCIsXCI1MVwiLFwiMDJcIl19LHtcInJlbGF0ZVR5cGVcIjoyLFwicmVsYXRlSWRcIjpbXCIxNDFcIl19LHtcInJlbGF0ZVR5cGVcIjozLFwicmVsYXRlSWRcIjpbXCIxNDBcIl19XSxcIlpCSFNIXCI6W3tcInJlbGF0ZVR5cGVcIjoxLFwicmVsYXRlSWRcIjpbMV19XSxcIkJJTkdPXCI6W3tcInJlbGF0ZVR5cGVcIjoxLFwicmVsYXRlSWRcIjpbM119XSxcIldBTExFVFwiOlt7XCJyZWxhdGVUeXBlXCI6MSxcInJlbGF0ZUlkXCI6W1wiMV8tMV8tMVwiLFwiN18xMjJfLTFcIixcIjdfMTIzXy0xXCIsXCIxM18yXy0xXCIsXCIxM18zXy0xXCIsXCIxM180Xy0xXCIsXCIxM18xMDJfLTFcIixcIjEzXzEzMV8tMVwiLFwiMTNfMTMyXy0xXCIsXCI3XzEyMV8wMDAwMDAwMDAxOTczNDRcIixcIjdfMTIxXzAwMDAwMDAwMDE5NzMzN1wiLFwiN18xMjFfMDAwMDAwMDAwMTk3MzM1XCIsXCI3XzEyMV8wMDAwMDAwMDAxOTczMzNcIixcIjEzXzFfMVwiLFwiMTNfMV80XCJdfV19IiwiY3JtVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlKOS5leUpwYm5OMFlXNWpaVWxrSWpveE1qRXhPREE1TXpFM05qQXdOVGt3TURBd0xDSnNiMmRwYms1aGJXVWlPaUl4TXpBd05ESTRNelUxTmlJc0luUmxibUZ1ZEVsa0lqb3hNakV5TWpjMk16TTFNREUzTnpRek16WXpMQ0pwWkNJNk1USXlPRGMyTURBME5UWXhNREU0TnpnME1pd2lhblJwSWpvaU9XUm1PVE00TURrdFlUbGtaQzAwTmpFMUxXSXpZelV0TkdKaE1Ua3pNVEJtT0dSaklpd2libUptSWpveE5UazNPVEUyTVRjMExDSmxlSEFpT2pFMk1ETXhNREF4TnpSOS5aVWNaRXVKbWR3UXAwa2Vlc3FYMjgzaXpIUzhLZ1BHeFVKal8way1wNklzIiwicGhvbmUiOiIxMzAwNDI4MzU1NiIsImFkbWluSWQiOiIxMjI4NzYwMDQ1NjEwMTg3ODQyIiwibmlja25hbWUiOiJnYmMiLCJhZG1pblJvbGVzTWFwIjoie1wiQklfSE9URUxcIjpbXCJTSkZYXCJdLFwiVVNFUl9NR01UXCI6W1widGVuYW50XCJdLFwiV0FMTEVUXCI6W1wiQ1dTSFwiLFwiQ1dEWlwiLFwiQ1dDWlwiLFwiV0FLRlwiLFwiV0FZWVwiXSxcIlpCSFNIXCI6W1wiSFMwMDFcIl0sXCJNQUxMXCI6W1wiQkhZWVwiXSxcIlpCREpcIjpbXCJESkNXXCIsXCJESjAwMVwiLFwiREowMDJcIl0sXCJaWVNISlwiOltcIk1EWVlcIl0sXCJCSU5HT1wiOltcIlRHVFpcIixcIlRHWVlcIl19IiwiZXhwIjoxNTk4MzQ4MTc0LCJ1c2VyTmFtZSI6IjEzMDA0MjgzNTU2IiwiaWF0IjoxNTk3OTE2MTc0fQ.0LBIaEX1ac4crrg6F6FGJ4EJnLH2A-9meKFKggHgcP9ZrlaE3gtwr_HryQchutm-',
        'Access-Control-Allow-Origin': '*'
      },
      data: {
        startAt: '1',
        endAt: '2'
      }
    }
    return (<div style={{ textAlign: 'left' }}>
      <Button>
        <Upload
          {...props}
          onChange={this.onChangeUpload}
        >
          导图</Upload>
      </Button>

      <Button type='primary' onClick={this.jumpPath}>增加商品</Button>
      <Table
        dataSource={[]}
      />
    </div>)
  }
  jumpPath = () => {
    this.props.history.push('/goods/add')
  }
  onChangeUpload = (file) => {
    console.log(file)
  }
}
