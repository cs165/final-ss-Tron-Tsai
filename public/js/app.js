class App {
  constructor() {
    this.gohomepage = this.gohomepage.bind(this);
    const homepage = document.querySelector('.mp');
    this.HomePage= new Homepage(homepage);
    const conpage = document.querySelector('.ct');
    this.ConPage= new Conpage(conpage);
    addEventListener('gohome',this.gohomepage);
  }
  gohomepage(){
    console.log('go?');
    this.HomePage.hide();
    window.location.href = '/id/123'; 
  }
 
}

