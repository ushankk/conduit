///   <reference types ='cypress'/>
import ConduitPage from './ConduitPage';
describe('Login and createArticle and delete Article', () =>{
    it('Login ', ()=>{
        ConduitPage.visitURL()
    //cy.visit("https://react-redux.realworld.io/")
   // cy.contains('Sign in').click()
    cy.login('ushanksit14@gmail.com' ,'Password')
   // cy.get('input[placeholder="Email"]').type('ushanksit14@gmail.com')
    //cy.get('input[placeholder="Password"]').type('Password')
    //cy.get('button[type="submit"]').click()
 
    })

    it('Create new Article  ', ()=>{
        ConduitPage.CreatePost()
      //  cy.get('a[href="#editor"]').click()
      //  cy.get('input[placeholder="Article Title"]').type('Cypress Article')
       // cy.get('.form-control').eq(1).type('cypresss')
       // cy.get(':nth-child(3) > .form-control').type('Cypress demo done')
       // cy.get('input[placeholder="Enter tags"]').type('cypress tags')
       // cy.get('button[type="button"]').click()
        })
    it('Delete Article',()=>{

      ConduitPage.deletePost()

    })

  })
