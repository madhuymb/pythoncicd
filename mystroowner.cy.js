import 'cypress-file-upload'

describe("login", function(){
    it("mystro", function(){
        cy.visit("https://dev.private.xpurto.com/")
        cy.wait(2000)
        cy.get('[data-testid="ownerBtn"]').click()
        cy.get("a[aria-label='sign in redirect']").click()
        cy.get("#phone").type('4793514122')
        cy.get("#password").type('Abcd123!')
        cy.get('[data-testid="authSignInSubmit"]').click()
        cy.wait(2000)
        cy.title().should('eq','Mystro | Profile')
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > nav:nth-child(1) > div:nth-child(2) > a:nth-child(1) > span:nth-child(2)").click()
        cy.get("div[class='hidden text-18 md:block']").should('contain','9')
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2) > p:nth-child(2)").click()
        cy.get("button[aria-label='expertise category Maintenance']").click()
        cy.get("button[type='button'] p").click()
        cy.get("button[aria-label='subcategory Landscaping information']").click()
        cy.get("button[type='button']").click()
        cy.wait(2000)
        cy.get("#locationId").type('South Calera, AL')
        cy.get("button[aria-label='select location South Calera'] p").click()
        cy.get("button[type='submit'] p").click()
        cy.get(":nth-child(1) > [data-testid='commonInputMediaGridAddBtn']",{includeShadowDom:true}).attachFile('AA1.jpg')
        //cy.get("button[type='submit'] p").click()
        //cy.get("button[type='submit'] p").click()



    
    })
})