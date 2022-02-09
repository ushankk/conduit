const URL ='https://react-redux.realworld.io/'
const SignInButton='Sign in'
const PWD_INPUT ="#password"
const NewPost ='a[href="#editor"]'
const articleTitle ='input[placeholder="Article Title"]'
const aboutArticle =':nth-child(2) > .form-control'
const WriteArticle =':nth-child(3) > .form-control'
const tag ='input[placeholder="Enter tags"]'
const publishArticle_button='button[type="button"]'
const deletePostButton='.btn-outline-danger'
 class ConduitPage{
     static visitURL(){
         cy.visit(URL)
         cy.contains(SignInButton).click()

     }

     static CreatePost(){
        cy.get(NewPost).click()
         cy.fixture('example').then((datafromjson) =>{
            const cypressarticle =datafromjson.cypressarticle
            const aboutArticle =datafromjson.aboutArticle

            cy.get(articleTitle).type(cypressarticle)
            //cy.get(aboutArticle).type(aboutArticle)

            cy.get(':nth-child(2) > .form-control').type(aboutArticle)
            cy.get(WriteArticle).type(datafromjson.WriteArticle)
            cy.get(tag).type(datafromjson.tag)
         })
       // cy.get(NewPost).click()
      //  cy.get(articleTitle).type(cypressarticle)
       // cy.get(aboutArticle).eq(1).type('cypresss')
      //  cy.get(WriteArticle).type('Cypress demo done')
      //  cy.get(tag).type('cypress tags')
        cy.get(publishArticle_button).click()
     }
   static deletePost(){
    cy.get(deletePostButton).click()

   }


 }

 export default ConduitPage