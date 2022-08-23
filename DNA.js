// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
let sample=['A','G','A', 'G', 'C', 'G','A', 'T', 'A', 'G','T', 'T', 'C', 'G','T']
let race='pitchou'

function pAequorFactory(specimenNum,dna){
  specimen={
    specimenNum,
    dna,
    mutate(){
      for(let i = 0;i<this.dna.length;i++){
        let base=returnRandBase()
        if(this.dna[i]='A'){
          while(base==='A'){
            base=returnRandBase()
          }
          this.dna[i]=base;
        }
        if(this.dna[i]==='T'){
          while(base==='T'){
            base=returnRandBase()
          }
          this.dna[i]=base;
        }
        if(this.dna[i]==='C'){
          while(base==='C'){
            base=returnRandBase();
          }
          this.dna[i]=base;
        }
        if(this.dna[i]==='G'){
          while(base==='G'){
            base=returnRandBase();
          }
          this.dna[i]=base;
        }
      }
      return dna;
    },
    compareDna(specimen2){
      let identical=0;
      for(let i=0;i<this.dna.length;i++){
        if(this.dna[i]===specimen2.dna[i]){
          identical++;
        }
      }
      return `percentage of resemblance is ${(identical*100)/15}%`
    },
  }

  return specimen;
}

console.log(pAequorFactory(race,sample).compareDna(test))








