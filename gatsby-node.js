var path=require('path')
// const arr=[
//     {
//         name:"Fruit",
//         desc:"Apple"
//     }
// ]
// exports.createPages = async function ({ actions }) {

//     actions.createPage({
//         path: "fruits",
//         component: require.resolve(`./src/templates/fruits.tsx`),
//         context: {
//             // Data passed to context is available
//             // in pageContext props of the template component
//             name:"Mango",
//             desc:"This Is Some Description Of Mango"
//         },
//     });
//     console.log("End of Gatsby Node File");
// }



// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
// exports.onCreatePage = async ({ page, actions }) => {
//     const { createPage } = actions

//     // Only update the `/app` page.
//     if (page.path.match(/^\/product/)) {
//         // page.matchPath is a special key that's used for matching pages
//         // with corresponding routes only on the client.
//         page.matchPath = "/product/*"

//         // Update the page.
//         createPage(page)
//     }
// }

exports.createPages=async({actions,graphql})=>{
    const {createPage}=actions;
    const result=await graphql(`
    {
         allContentfulElectronics {
    nodes {
      slug
      title
    }
  }
    }
    `)
    result.data.allContentfulElectronics.nodes.forEach((obj)=>{
        createPage({
            path:`/product/${obj.slug}`,
            component: path.resolve('./src/templates/product.tsx'),
            context:{
                itemDetails: obj
            }
        })
    })
}