import React from 'react';
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
export default function Product({pageContext}){
    const { itemDetails } = pageContext
    return(
        <div>
            <h1>{itemDetails.title}</h1>
            <p>{documentToReactComponents(itemDetails.desc)}</p>
        </div>
    )
}