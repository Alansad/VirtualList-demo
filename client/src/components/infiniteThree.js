import React from 'react';

// 应该接收的props: renderItem: Function<Promise>, height:string; estimateHeight:Number， resource: Array

// 下滑刷新组件
class InfiniteThree extends React.Component {
  constructor(props) {
    super(props);
    this.renderItem = props.renderItem
    this.getData = props.getData
    this.estimateHeight = Number(props.estimateHeight) * 10 //一页10条数据，进行一页数据的预估
    this.resource = props.resource
    this.listLength = props.resource.length
    let pageList = []
    // 对接收到的大数据进行分页整理,保存在List里面
    let array = []
    for(let i = 0; i < props.resource.length; i++){
      if(i % 10 === 0 && i || i === (props.resource.length - 1)){
        pageList.push({
          data: array,
          visible: false
        })
        array = []
      }
      array.push(props.resource[i])
    }
    pageList[0].visible = true
    // 然后对pageHeight根据预估高度进行预估初始化，后续重新进行计算
    this.pageHeight = []
    for(let i = 0; i < this.listLength; i++){
      if(i === 0){
        this.pageHeight.push({
          top: 0,
          height: this.estimateHeight,
          isComputed: false,
        })
      }else{
        this.pageHeight.push({
          top: this.pageHeight[i-1].top + this.pageHeight[i-1].height,
          height: this.estimateHeight,
          isComputed: false
        })
      }
      this.state = {
        loading: false,
        page: 0,
        showMsg: false,
        List: pageList,
      }
    }
  }
  onScroll() {
    requestAnimationFrame(() => {
      let { offsetHeight, scrollHeight, scrollTop } = this.refs.scrollWrapper;
      // 判断一下需要展示的列表，其他的列表都给隐藏了
      let ListShow = [...this.state.List]
      ListShow.forEach((item, index) => {
        if(this.pageHeight[index]){
          let bottom = this.pageHeight[index].top + this.pageHeight[index].height
          if((bottom < scrollTop - 5) || (this.pageHeight[index].top > scrollTop + offsetHeight + 5)){
            ListShow[index].visible = false
          }else{
            // 根据预估高度算出来它在视野内的时候，先给它变成visible，让他出现，才能拿到元素高度
            this.setState(prevState => {
              let List = [...prevState.List]
              List[index].visible = true
              return  {
                List
              }
            })
            // 出现以后，然后计算高度，替换掉之前用预估高度设置的height
            let target = this.refs[`page${index}`]
            let top = 0;
            if(index > 0){
              top = this.pageHeight[index - 1].top + this.pageHeight[index - 1].height
            }
            if(target && target.offsetHeight && !ListShow[index].isComputed){
              this.pageHeight[index] = {top, height: target.offsetHeight}
              console.log(target.offsetHeight)
              ListShow[index].visible = true
              ListShow[index].isComputed = true
              // 计算好了以后，还要再setState一下，调整列表高度
              this.setState({
                List: ListShow,
              })
            }else{
              this.pageHeight[index] = {top, height: this.estimateHeight}
            }
          }
        }
      })
    })
  }
  componentDidMount() {

  }

  render() {
    let {List} = this.state
    let headerHeight = 0;
    let bottomHeight = 0;
    let i = 0;
    for(; i < List.length; i++){
      if(!List[i].visible){
        headerHeight += this.pageHeight[i].height
      }else{
        break;
      }
    }
    for(; i < List.length; i++){
      if(!List[i].visible){
        bottomHeight += this.pageHeight[i].height
      }
    }
    const renderList = List.map((item,index)=>{
      if(item.visible){
        return <div ref={`page${index}`} key={`page${index}`}>
          {item.data.map((value, log) => {
            return(
              this.renderItem(value, `${index}-${log}`)
            )
          })}
        </div>
      }
    })
    return(
      <div
        ref="scrollWrapper"
        onScroll={this.onScroll.bind(this)}
        style={{height: 400, overflow: 'scroll'}}
      >
        <div style={{height: headerHeight}}></div>
        {renderList}
        <div style={{height: bottomHeight}}></div>
        {this.state.loading && (
          <div>加载中</div>
        )}
        {this.state.showMsg && (
          <div>暂无更多内容</div>
        )}
      </div>
    )

  }
}


export default InfiniteThree;
