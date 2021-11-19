import React, { Component } from 'react'
import Shop_Data from './shop.data'

import CollectionPreview from '../../components/preview-collection/preview.component'


class ShopPage extends Component{
    constructor(props){
        super(props)

        this.state ={
            collections: Shop_Data
        }
    }
render(){
    const {collections} = this.state;
    return (<div className='shop-page'>
    {
        collections.map(({id,...otherCollections}) =>(
            <CollectionPreview key={id} {...otherCollections}/>
        ))
    }

    </div>)
}
    
}
export default ShopPage