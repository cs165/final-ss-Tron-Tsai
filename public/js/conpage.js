class Conpage {
    constructor(containerElement) {
      this.hide=this.hide.bind(this);
      this.containerElement = containerElement;
      this.goedit=this.goedit.bind(this);
      this.spa=document.querySelector('#ds');
      console.log('hey');
      console.log(spa);
      this.ta=document.querySelector('textarea');
      console.log('there');
      console.log(ta);
      this.spa.addEventListener('click',this.goedit);
    }
    goedit(){
        this.spa.classList.add('inactive');
        this.ta.classList.remove('inactive');
    }
    hide(){
      this.containerElement.classList.add('inactive');
    }
  }
  
  