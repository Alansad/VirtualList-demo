import React, { Component } from 'react'
import * as api from '../../config/apiConfig'
import index from "./index.css";
import InfiniteOne from '../../components/infiniteOne'
import InfiniteTwo from '../../components/infiniteTwo'
import InfiniteThree from '../../components/infiniteThree'
import renderCard from './renderTemplate/renderCard'
import renderTable from './renderTemplate/renderTable'
import Get from '../../utils/Get'

const initData = {
  avatar: "https://img.ljcdn.com/growth-activity/1567046979333.jpg.480x640.jpg",
  name: "刘蕴德",
  englishName: "Steven",
  introFeature: "为高净值家庭定制全球资产配置",
  businessArea: "负责美国、英国、澳大利亚、日本、泰国",
  reason: "5年工作经验",
  school: "北京城市学院",
  recommendHouse: "名仕公馆",
  recommendReason: "开发商租赁保障，价格低，位置优越"
}

class Index extends Component {
  constructor(props) {
    super(props)
    this.renderCard = renderCard
    this.renderTable = renderTable
    this.Get = Get
    let array = []
    for(let i = 0; i < 99999; i++){
      array.push(initData)
    }
    this.resource = array
  }

  getCard(page){
    let url = api.getCardList + '?page=' + page
    return this.Get(url)
  }

  getTable(page){
    let url = api.getTableList + '?page=' + page
    return this.Get(url)
  }

  render() {
    return (
      <div className="test-list">
        <div className="card-list">
          <h1>方案三</h1>
          <div className="component-agent-hw-m-9">
            <InfiniteThree renderItem={this.renderTable} resource={this.resource} height="400px" itemHeight="193" estimateHeight="200"></InfiniteThree>
          </div>
        </div>
        <div className="card-list">
          <h1>方案二</h1>
          <div className="component-agent-hw-m-9">
            <InfiniteOne renderItem={this.renderCard} getData={this.getCard.bind(this)} height="400px" itemHeight="226"></InfiniteOne>
          </div>
        </div>
        <div className="card-list">
          <h1>方案一</h1>
          <div className="component-agent-hw-m-9">
            <InfiniteTwo renderItem={this.renderCard} getData={this.getCard.bind(this)} height="400px" itemHeight="226"></InfiniteTwo>
          </div>
        </div>
        {/*<div className="table-list">*/}
          {/*<h1>table列表</h1>*/}
          {/*<div className="comments">*/}
            {/*<InfiniteThree renderItem={this.renderTable} getData={this.getTable.bind(this)} height="400px" itemHeight="156"></InfiniteThree>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    )
  }
}

export default Index


