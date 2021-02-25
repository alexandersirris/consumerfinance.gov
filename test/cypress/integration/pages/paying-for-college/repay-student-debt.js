import {
  PfcRepayStudentDebt
} from '../../../pages/paying-for-college/repay-student-debt.js';

const page = new PfcRepayStudentDebt();

describe( 'Paying for College', () => {
  describe( 'Repay student debt', () => {
    it( 'should display Direct debit and extra payments', () => {
      page.open();
      page.click( 'Federal' );
      page.selectQuestion(
        '2', 'Have you missed one or more payments on your student loans?'
      );
      page.clickResponse( '2', 'Yes' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I have MISSED one or more payments(s)' );
      page.selectQuestion( '3', 'Are you currently in default?' );
      page.clickResponse( '3', 'Not sure' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I am NOT SURE if I am in default.' );
      page.selectQuestion(
        '8', 'Are you confident you can make the full payment?'
      );
      page.clickResponse( '8', 'Yes' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I AM confident I can make my monthly payments.' );
      page.selectQuestion( '9', 'Are you an active duty servicemember?' );
      page.clickResponse( '9', 'No' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I am NOT an active duty servicemember.' );
    } );
    it( 'should display Lower your interest rate', () => {
      page.open();
      page.click( 'Non-Federal' );
      page.selectQuestion(
        '2', 'Have you missed one or more payments on your student loans?'
      );
      page.clickResponse( '2', 'Yes' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I have MISSED one or more payments(s)' );
      page.selectQuestion( '3', 'Are you currently in default?' );
      page.clickResponse( '3', 'Not sure' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I am NOT SURE if I am in default.' );
      page.selectQuestion(
        '8', 'Are you confident you can make the full payment?'
      );
      page.clickResponse( '8', 'No' );
      cy.get( '.ds-response-container' )
        .should(
          'contain',
          'I am NOT confident I can make my monthly payments.'
        );
      page.selectQuestion(
        '9', 'Are you an active duty servicemember?'
      );
      page.clickResponse( '9', 'Yes' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I AM an active duty servicemember.' );
    } );
    it( 'should display Federal direct consolidation loans', () => {
      page.open();
      page.click( 'Federal' );
      page.selectQuestion(
        '2', 'Have you missed one or more payments on your student loans?'
      );
      page.clickResponse( '2', 'Yes' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I have MISSED one or more payments(s)' );
      page.selectQuestion(
        '3', 'Are you currently in default?'
      );
      page.clickResponse( '3', 'Yes' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I am IN DEFAULT.' );
      page.selectQuestion(
        '4', 'Are you able to make any payments on your defaulted federal loan?'
      );
      page.clickResponse( '4', 'Yes' );
      cy.get( '.ds-response-container' )
        .should(
          'contain',
          'I am ABLE to make any payments on my defaulted federal loan.'
        );
      page.selectQuestion(
        '5', 'Do you need to go back to school in the fall?'
      );
      page.clickResponse( '5', 'Yes' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I DO plan to go back to school.' );
    } );
    it( 'should display Know Your Options', () => {
      page.open();
      page.click( 'Federal' );
      page.selectQuestion(
        '2', 'Have you missed one or more payments on your student loans?'
      );
      page.clickResponse( '2', 'Yes' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I have MISSED one or more payments(s)' );
      page.selectQuestion(
        '3', 'Are you currently in default?'
      );
      page.clickResponse( '3', 'Yes' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I am IN DEFAULT.' );
      page.selectQuestion(
        '4', 'Are you able to make any payments on your defaulted federal loan?'
      );
      page.clickResponse( '4', 'Yes' );
      cy.get( '.ds-response-container' )
        .should(
          'contain',
          'I am ABLE to make any payments on my defaulted federal loan.'
        );
      page.selectQuestion(
        '5', 'Do you need to go back to school in the fall?'
      );
      page.clickResponse( '5', 'No' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I do NOT plan to go back to school.' );
      page.selectQuestion(
        '6',
        'Do you need to get credit (for example, get a credit card, ' +
        'take out a mortgage, or qualify for a car loan)?'
      );
      page.clickResponse( '6', 'No' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I do NOT want to get another type of credit.' );
      page.selectQuestion(
        '7', 'Can you pay off your defaulted federal student loans?'
      );
      page.clickResponse( '7', 'No' );
      cy.get( '.ds-response-container' )
        .should(
          'contain',
          'I CANNOT afford to pay off my defaulted federal loan.'
        );
    } );
    it( 'should display Payment plans based on your income', () => {
      page.open();
      page.click( 'Federal' );
      page.selectQuestion(
        '2', 'Have you missed one or more payments on your student loans?'
      );
      page.clickResponse( '2', 'No' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I have NOT MISSED any payments.' );
      page.selectQuestion(
        '8', 'Are you confident you can make the full payment?'
      );
      page.clickResponse( '8', 'No' );
      cy.get( '.ds-response-container' )
        .should(
          'contain',
          'I am NOT confident I can make my monthly payments.'
        );
      page.selectQuestion(
        '9', 'Are you an active duty servicemember?'
      );
      page.clickResponse( '9', 'No' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I am NOT an active duty servicemember.' );
    } );
    it( 'should display Reach out to your loan servicer', () => {
      page.open();
      page.click( 'Federal' );
      page.selectQuestion(
        '2', 'Have you missed one or more payments on your student loans?'
      );
      page.clickResponse( '2', 'Yes' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I have MISSED one or more payments(s)' );
      page.selectQuestion(
        '3', 'Are you currently in default?'
      );
      page.clickResponse( '3', 'No' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I am NOT IN DEFAULT.' );
      page.selectQuestion(
        '8', 'Are you confident you can make the full payment?'
      );
      page.clickResponse( '8', 'Yes' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I AM confident I can make my monthly payments.' );
      page.selectQuestion(
        '9', 'Are you an active duty servicemember?'
      );
      page.clickResponse( '9', 'Yes' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I AM an active duty servicemember.' );
    } );
    it( 'should display Getting ahead on your private student loan', () => {
      page.open();
      page.click( 'Non-Federal' );
      page.selectQuestion(
        '2', 'Have you missed one or more payments on your student loans?'
      );
      page.clickResponse( '2', 'No' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I have NOT MISSED any payments.' );
      page.selectQuestion(
        '8', 'Are you confident you can make the full payment?'
      );
      page.clickResponse( '8', 'Yes' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I AM confident I can make my monthly payments.' );
      page.selectQuestion(
        '9', 'Are you an active duty servicemember?'
      );
      page.clickResponse( '9', 'No' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I am NOT an active duty servicemember.' );
    } );
    it( 'should display Getting out of default ' +
        'when you face debt collection', () => {
      page.open();
      page.click( 'Non-Federal' );
      page.selectQuestion(
        '2', 'Have you missed one or more payments on your student loans?'
      );
      page.clickResponse( '2', 'Yes' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I have MISSED one or more payments(s)' );
      page.selectQuestion(
        '3', 'Are you currently in default?'
      );
      page.clickResponse( '3', 'Yes' );
      cy.get( '.ds-response-container' )
        .should( 'contain', 'I am IN DEFAULT.' );
    } );
  } );
} );
