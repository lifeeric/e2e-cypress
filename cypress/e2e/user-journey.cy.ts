describe("[User Journey]", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it.only("A User can find a course on the home page and complete the course lessons", () => {
    cy.getByData("course-0").find("a").eq(3).click()
    cy.location("pathname").should("eq", "/testing-your-first-application")

    cy.getByData("next-lesson-button").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/app-install-and-overview",
      { timeout: 10000 }
    )

    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )

    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )

    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.location("pathname").should("eq", "/")
  })
})
