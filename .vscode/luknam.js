function CostofPaymentperMouth(cost)  {
    const trasationFee = 3;
    const interestFee = cost * 0.001;
    return cost + trasationFee + interestFee;

    console.log(CostofPaymentperMouth(100));
};

function Welcomes(name) {
   const Welcomes = (name1, name2, name3) =>
   console.log('Welcomes {${name1}} {${name2}} {${name3}}') 
   console.log("Welcomes" + name)
   Welcomes ("M", "J", "L");
}

function CalculateAge() {
    const birthYear = prompt("Please enter year of birth", " 1997", " 2000", " 2003");
    let age = new Date().getFullYear() - birthYear;
    if (age != null) {
    console.log(CalculateAge(2003))
    }
}

const name1 = {
    name: 'M',
    birthYear: 1997,
    age: ""
}

const name2 = {
    name: 'J',
    birthYear: 2000,
    age: ""
}

const name3 = {
    name: 'L',
    birthYear: 2003,
    age: ""
}

function WelcomesWithdAge(name1, name2, name3) {
    const now = new Date().getFullYear();
    name1.age = now - name1.birthYear;
    name2.age = now - name2.birthYear;
    name3.age = now - name3.birthYear;
    console.log('Welcomes {${name1.name}}, you are {${name1.age}}, Welcomes {${name2.name}}, you are {${name2.age}}, Welcomes {${name3.name}}, you are {${name3.age}},')
}

function RubricforGrading(score) {
    let (RubricforGrading = score >=5)
        if(score == 11) {
            console.log('Perfect');
        }else if (score > 8) {
            console.log('Excallent');
        }
        return RubricforGrading
    }