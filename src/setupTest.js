import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react'

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods : true
    
})