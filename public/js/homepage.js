class Homepage {
  constructor(containerElement) {
    this.hide=this.hide.bind(this);
    this.containerElement = containerElement;
    this.readygo=this.readygo.bind(this);
    this.cjournal=document.querySelector('#tb');
    console.log(this.cjournal);
    this.cjournal.addEventListener('click',this.readygo);
  }
  readygo(){
    console.log('gogogo');
    let gohome=new CustomEvent('gohome');
    dispatchEvent(gohome);
  }
  hide(){
    this.containerElement.classList.add('inactive');
  }
}

