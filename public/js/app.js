class App {
  constructor() {
    this.gohomepage = this.gohomepage.bind(this);
    const homepage = document.querySelector('.mp');
    this.HomePage= new Homepage(homepage);
    addEventListener('gohome',this.gohomepage);
  }
  gohomepage(){
    console.log('go?');
    this.HomePage.hide();
    window.location.href = '/id/123'; 
  }
 
}

