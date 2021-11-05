```JS
1 -react hooks 默认 4 个钩子函数
1-1 -useState() :状态钩子    useState()用于为函数组件引入状态

import React, {useState} from 'react'
const AddCount = () => {
const [ count, setCount ] = useState(0)
const addcount = () => {
  let newCount = count
  setCount(newCount+=1)
}
return (
  <>
    <p>{count}</p>
    <button onClick={addcount}>count++</button>
  </>
)
}
export default AddCount

1-2 -userContext() :共享状态钩子     该钩子的作用是，在组件之间共享状态
import React,{ useContext } from 'react'
const Ceshi = () => {
  const AppContext = React.createContext({})
  const A =() => {
    const { name } = useContext(AppContext)
    return (
        <p>我是A组件的名字{name}<span>我是A的子组件{name}</span></p>
    )
}
const B =() => {
  const { name } = useContext(AppContext)
  return (
      <p>我是B组件的名字{name}</p>
  )
}
  return (
    <AppContext.Provider value={{name: 'hook测试'}}>
    <A/>
    <B/>
    </AppContext.Provider>
  )
}
export default Ceshi


1-3 -userReducer()  :Action钩子
1-4 -useEffect()    :副作用钩子    useEffect(() => {},[array])
  useEffect()接受两个参数，第一个参数是你要进行的异步操作，第二个参数是一个数组，用来给出Effect的依赖项。只要这个数组发生变化，
  useEffect()就会执行。当第二项省略不填时，
  useEffect()会在每次组件渲染时执行。这一点类似于类组件的componentDidMount。下面我们通过代码模拟一个异步加载数据。

  import React, { useState, useEffect } from 'react'

const AsyncPage = ({name}) => {
const [loading, setLoading] = useState(true)
const [person, setPerson] = useState({})

  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
      setPerson({name})
    },2000)
  },[name])
  return (
    <>
      {loading?<p>Loading...</p>:<p>{person.name}</p>}
    </>
  )
}

const PersonPage = () =>{
  const [state, setState] = useState('')
  const changeName = (name) => {
    setState(name)
  }
  return (
    <>
      <AsyncPage name={state}/>
      <button onClick={() => {changeName('名字1')}}>名字1</button>
      <button onClick={() => {changeName('名字2')}}>名字2</button>
    </>
  )
}

export default PersonPage
```
