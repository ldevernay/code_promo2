class BeerSong {
  verse(number){
    if(number>1){
      console.log(`${number} bottles of beer on the wall,\n ${number} bottles of beer. Take one down and pass it around,
       ${number-1} bottles of beer on the wall.\n`)
    }
    else if(number==1){
      console.log(`${number} bottle of beer on the wall, ${number} bottle of beer.\n Take it down and pass it around, no more bottles of beer on the wall.\n`)
    }
    else{
      console.log(`No more bottles of beer on the wall, no more bottles of beer.\n Go to the store and buy some more, 99 bottles of beer on the wall.\n`)
    }
  }
  sing(n1,n2=0){
    for(let i=n1;i>=n2;i--){
      this.verse(i)
    }
  }
}
song=new BeerSong()
song.sing(8)