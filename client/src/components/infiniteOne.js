import React from 'react';

// 应该接收的props: renderItem: Function<Promise>, getData:Function;  height:string;

// 下滑刷新组件
class InfiniteOne extends React.Component {
  constructor(props) {
    super(props);
    this.renderItem = props.renderItem
    this.getData = props.getData
    this.state = {
      loading: false,
      page: 0,
      showMsg: false,
      List: []
    }
    this.pageHeight = []
  }
  onScroll() {
    let { offsetHeight, scrollHeight, scrollTop } = this.refs.scrollWrapper;
    // 判断一下需要展示的列表，其他的列表都给隐藏了
    let ListShow = [...this.state.List]
    ListShow.forEach((item, index) => {
      if(this.pageHeight[index]){
        let bottom = this.pageHeight[index].top + this.pageHeight[index].height
        if((bottom < scrollTop - 50) || (this.pageHeight[index].top > scrollTop + offsetHeight + 50)){
          ListShow[index].visible = false
        }else{
          ListShow[index].visible = true
        }
      }
    })
    this.setState({
      List: ListShow
    })
    if(offsetHeight + scrollTop + 5 > scrollHeight){
      if(!this.state.showMsg){
        let page = this.state.page;
        page++;
        this.setState({
          loading: true
        })
        this.getData(page).then(data => {
          this.setState(prevState => {
            let List = [...prevState.List]
            List[page] =  {data, visible: true}
            return  {
              loading: false,
              page: page,
              List: List,
              showMsg: data && data.length > 0 ? false : true
            }
          })
          // setState之后，更新了dom，这时候需要知道每个page的top和height
          requestAnimationFrame(() => {
            const target = this.refs[`page${page}`]
            let top = 0;
            if(page > 0){
              top = this.pageHeight[page - 1].top + this.pageHeight[page - 1].height
            }
            this.pageHeight[page] = {top, height: target.offsetHeight}
          })
        })
      }
    }
  }
  componentDidMount() {
    this.getData(this.state.page).then(data => {
      this.setState((prevState) => {
        let List = [...prevState.List]
        List[this.state.page] = {data, visible: true}
        return {List}
      })
      requestAnimationFrame(() => {
        this.pageHeight[0] = {top: 0, height: this.refs['page0'].offsetHeight}
      })
    })
  }

  render() {
    const {List} = this.state
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
    console.log(renderList)
    return(
      <div
        ref="scrollWrapper"
        onScroll={this.onScroll.bind(this)}
        style={{height: this.props.height, overflow: 'scroll'}}
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


export default InfiniteOne;
