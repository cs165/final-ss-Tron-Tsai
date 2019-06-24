class Conpage {
    constructor(containerElement) {
      this.hide=this.hide.bind(this);
      this.containerElement = containerElement;
      this.goedit=this.goedit.bind(this);
      this.spa=document.getElementById('#ds');
      console.log('hey');
      console.log(this.spa);
      this.ta=document.getElementById('#ta');
      console.log('there');
      console.log(this.ta);
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
  
  