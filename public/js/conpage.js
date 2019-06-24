class Conpage {
    constructor(containerElement) {
      this.hide=this.hide.bind(this);
      this.containerElement = containerElement;
      this.goedit=this.goedit.bind(this);
      this.editback=this.editback.bind(this);
      this.getRandomInt = this.getRandomInt.bind(this);
      this.gohome=this.gohome.bind(this);
      this.spa=document.getElementById('spa');
      this.ta=document.getElementById('ta');
      this.fst=document.getElementById('fst');
      this.sec=document.getElementById('sec');
      this.hb=document.getElementById('hb');
      this.dt=document.getElementById('dt');
      this.ds=document.getElementById('ds');
      this.pre=document.getElementById('pre');
      this.next=document.getElementById('next');
      this.home=document.getElementById('home');
      this.randomtheme = ['List the things that make you feel powerful.',
      'What is something that made you laugh today?',
      'List the movies that you want to watch.',
      'List the things that make you feel peaceful.',
      'List your greatest comforts.',
      'What is something that brightens your day?',
      'List three things you accomplished today.',
      'What is something you look forward to every day?',
      'What is a game that you like to play?',
      'What is your Sunday ritual?',
      'List the most memorable moments of this month so far.',
      'List some things you want to do outdoors.',
      'If you could live anywhere you wanted, where would you live?',
      'List what you would spend a million dollars on, just for you.',
      'When do you feel most energized?',
      'List the things that make you feel excited.',
      'List your favorite snacks or treats.',
      'What has you busy this week?',
      'List the people you admire.',
      'List the happiest moments of your year so far.',
      'What hobby would you like to pick up?',
      'List the ways you love to have fun.',
      'Describe something you learned today',
      'List something fun you did or will do today.',
      'What is your dream job?',
      'List the things that inspire you.',
      'List something you did today that you are proud of.',
      'Find a quote that you like and write it down here.',
      'List something you should ignore.',
      'Talk about something you are excited about next month.',
      'List three traits you would like others to see in you.'];
      this.spa.addEventListener('click',this.goedit);
      this.hb.addEventListener('click',this.editback);
      this.home.addEventListener('click',this.gohome);
      this.pre.addEventListener('click',this.gopre);
      this.next.addEventListener('click',this.gonext);
      this.today = new Date();
      this.day=this.today;
      this.options = { month: 'long', day: 'numeric' };
      console.log(this.today.toLocaleDateString('en-US', this.options));
      this.dt.innerHTML=this.today.toLocaleDateString('en-US', this.options);
      this.ds.innerHTML=this.randomtheme[this.getRandomInt(this.randomtheme.length)];
      this.response = fetch('/dat')
      .then((response) => response.json())
      .then((firstjson) => {
          this.todaycon=firstjson;
          for(var i=0; i < this.todaycon.length; i++){
            if(this.todaycon[i][0]==this.today.toLocaleDateString())
            {
              const todayconn=this.todaycon[i][1];
              
              this.spa.innerHTML=todayconn;
              this.ta.value=todayconn;
            }
        }
      });
      

    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    goedit(){
        console.log('ingoedit');
        this.spa.classList.add('inactive');
        this.fst.classList.add('inactive');
        this.ta.classList.remove('inactive');
        this.sec.classList.remove('inactive');
        console.log('area value:'+this.ta.value);
    }
    editback(){
        this.spa.classList.remove('inactive');
        this.fst.classList.remove('inactive');
        this.ta.classList.add('inactive');
        this.sec.classList.add('inactive');
        var change=this.ta.value;
        console.log(change);
        this.spa.innerHTML=change;
    }
    gohome(){
        location.reload(true);
    }
    gopre(){
        this.day.setDate(this.day.getDate() - 1);
        console.log('thisday:'+this.day);
        this.response = fetch('/dat')
      .then((response) => response.json())
      .then((firstjson) => {
          this.todaycon=firstjson;
          for(var i=0; i < this.todaycon.length; i++){
            if(this.todaycon[i][0]==this.today.toLocaleDateString())
            {
              const todayconn=this.todaycon[i][1];
              
              this.spa.innerHTML=todayconn;
              this.ta.value=todayconn;
            }
        }
      });
    }
    hide(){
      this.containerElement.classList.add('inactive');
    }
  }
  
  