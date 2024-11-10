describe('Registration', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
  });


  describe('Registration Form Tests', () => {
    beforeEach(() => {
      cy.visit('https://bookcart.azurewebsites.net/register');
    });
  
      // 1. Blank First Name Field
      it('should show error for blank first name field', () => {
        cy.xpath("//input[@id='mat-input-0']").click();
        cy.xpath("//input[@id='mat-input-1']").type('Doe');
        cy.xpath("//input[@id='mat-input-2']").type('john_doe');
        cy.xpath("//input[@id='mat-input-3']").type('Signup@123');
        cy.xpath("//input[@id='mat-input-4']").type('Signup@123');
        cy.xpath("//input[@id='mat-radio-3-input']").click();
        cy.xpath("//span[normalize-space()='Register']").click();
        cy.contains('First Name is required').should('be.visible');
      });
    
      // 2. Blank Last Name Field
      it('should show error for blank last name field', () => {
        cy.xpath("//input[@id='mat-input-0']").type('John');
        cy.xpath("//input[@id='mat-input-1']").click();
        cy.xpath("//input[@id='mat-input-2']").type('john_doe');
        cy.xpath("//input[@id='mat-input-3']").type('Signup@123');
        cy.xpath("//input[@id='mat-input-4']").type('Signup@123');
        cy.xpath("//input[@id='mat-radio-3-input']").click();
        cy.xpath("//span[normalize-space()='Register']").click();
        cy.contains('Last Name is required').should('be.visible');
      });
    
      // 3. Blank Username Field
      it('should show error for blank username field', () => {
        cy.xpath("//input[@id='mat-input-0']").type('John');
        cy.xpath("//input[@id='mat-input-1']").type('Doe');
        cy.xpath("//input[@id='mat-input-2']").click();
        cy.xpath("//input[@id='mat-input-3']").type('Signup@123');
        cy.xpath("//input[@id='mat-input-4']").type('Signup@123');
        cy.xpath("//input[@id='mat-radio-3-input']").click();
        cy.xpath("//span[normalize-space()='Register']").click();
        cy.contains('User Name is required ').should('be.visible');
      });
    
      // 4. Blank Password Field
      it('should show error for blank password field', () => {
        cy.xpath("//input[@id='mat-input-0']").type('John');
        cy.xpath("//input[@id='mat-input-1']").type('Doe');
        cy.xpath("//input[@id='mat-input-2']").type('john_doe');
        cy.xpath("//input[@id='mat-input-3']").click();
        cy.xpath("//input[@id='mat-input-4']").type('Signup@123');
        cy.xpath("//input[@id='mat-radio-3-input']").click();
        cy.xpath("//span[normalize-space()='Register']").click();
        cy.contains('Password is required').should('be.visible');
      });
    
      // 5. Blank Gender Field
      it('should show error for blank gender field', () => {
        cy.xpath("//input[@id='mat-input-0']").type('John');
        cy.xpath("//input[@id='mat-input-1']").type('Doe');
        cy.xpath("//input[@id='mat-input-2']").type('john_doe');
        cy.xpath("//input[@id='mat-input-3']").type('Signup@123');
        cy.xpath("//input[@id='mat-input-4']").type('Signup@123');
        cy.xpath("//span[normalize-space()='Register']").click();
        cy.contains('Gender is required').should('be.visible');
      });
    
    
      // 6. Password and Confirm Password Mismatch
      it('should show error when password and confirm password do not match', () => {
        cy.xpath("//input[@id='mat-input-0']").type('John');
        cy.xpath("//input[@id='mat-input-1']").type('Doe');
        cy.xpath("//input[@id='mat-input-2']").type('john_doe');
        cy.xpath("//input[@id='mat-input-3']").type('Signup@123');
        cy.xpath("//input[@id='mat-input-4']").type('Mismatched@123');
        cy.xpath("//input[@id='mat-radio-3-input']").click();
        cy.xpath("//span[normalize-space()='Register']").click();
        cy.contains('Password do not match').should('be.visible');
      });
    
      // 7. Valid Registration (All Fields Correct)
      it('should successfully register a user with valid data', () => {
        cy.xpath("//input[@id='mat-input-0']").type('John');
        cy.xpath("//input[@id='mat-input-1']").type('Doe');
        cy.xpath("//input[@id='mat-input-2']").type('john_doe');
        cy.xpath("//input[@id='mat-input-3']").type('Signup@123');
        cy.xpath("//input[@id='mat-input-4']").type('Signup@123');
        cy.xpath("//input[@id='mat-radio-3-input']").click();
        cy.xpath("//span[normalize-space()='Register']").click();
        cy.contains('Registration Successful').should('be.visible');
      });

      // 8. Password Without Numbers
      it('should show error for password without numbers', () => {
        cy.xpath("//input[@id='mat-input-0']").type('John');
        cy.xpath("//input[@id='mat-input-1']").type('Doe');
        cy.xpath("//input[@id='mat-input-2']").type('john_doe');
        cy.xpath("//input[@id='mat-input-3']").type('Password!'); // Password without numbers
        cy.xpath("//input[@id='mat-input-4']").type('Password!');
        cy.xpath("//input[@id='mat-radio-3-input']").click();
        cy.xpath("//span[normalize-space()='Register']").click();
        cy.contains('Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number').should('be.visible');
      });
        
  });

});


