describe("worker",function(){
    beforeEach("workerlogin",function(){
        cy.visit("https://dev.private.xpurto.com/sign-in/worker")
        cy.get("#username").type('paul10')
        cy.get("#password").type('Abcd123!')
        cy.get("button[type='submit']").click()
        cy.get("svg[viewBox='0 0 140 33']").should('be.visible')
    })
    afterEach("logout",function(){
        cy.get('[data-testid="myProfileHeaderOpenMobileMenuBtn"] > .my-profile__avatar > .relative > .rounded-full').click()
        cy.get('[data-testid="myProfileMobileMenuLogoutBtn"] > p').click()
        cy.get("a[class='block h-8 w-[8.875rem] fill-green'] svg").should('be.visible')
    })
    it("post",function(){
        cy.get("#postText").type('I am a tiles worker')
        cy.get("button[type='submit'] p").click()
    })
    it("verify project count",function(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > nav:nth-child(1) > div:nth-child(3) > a:nth-child(1) > span:nth-child(2)").click()
        cy.get(".pl-1.text-gray").should('have.text','(20852)')
    })
})