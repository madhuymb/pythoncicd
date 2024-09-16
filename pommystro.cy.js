import login from "../pageobects/mystrologin"
describe('pageobjectmodel', function() {
    it('pom1 login', function() {
        cy.visit("https://dev.private.xpurto.com/sign-in/homeowner")
        const ln=new login()
        ln.setUserName("6232201240")
        ln.setPassword("Abcd123!")
        ln.clickSubmit()
        ln.verifyLogin()        
            
  })
  
        
        
 })
