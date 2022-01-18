function provideYear() {
    let year = Math.floor(Math.random() * 20) + 2022;
    return year;
}

function chooseCategory() {
    let categoryNum = Math.floor(Math.random() * 3);
    let category;
    switch(categoryNum) {
        case 0: category = 'Nature'; break;
        case 1: category = 'Politics'; break;
        case 2: category = 'Personal'; break;
        default: break;
    }
    return category;
}

function chooseMessageElement(elementsList) {
    let i = Math.floor(Math.random() * elementsList.length);
    return elementsList[i];
}

function mixedMessage() {
    let chosenYear = provideYear();
    let chosenCategory = chooseCategory();
    let subject;
    let action;
    let object;
    switch (chosenCategory) {
        case 'Nature':
            subject = chooseMessageElement(natureSubjects);
            action = chooseMessageElement(natureActions);
            object = chooseMessageElement(natureObjects);
            break;
        case 'Politics':
            subject = chooseMessageElement(politicsSubjects);
            action = chooseMessageElement(politicsActions);
            object = chooseMessageElement(politicsObjects);
            break;
        case 'Personal':
            subject = chooseMessageElement(personalSubjects);
            action = chooseMessageElement(personalActions);
            object = chooseMessageElement(personalObjects);
            break;
        default: break;            
    }
    console.log(`The Oracle of the future predicts that in the year ${chosenYear} ${subject} will ${action} ${object}.`)
}

const natureSubjects = ['a meteorite', 'an hurrican', 'an earthquake', 'a tsunami', 'a wild fire'];
const natureActions = ['destroy', 'devastate', 'obliterate', 'annihilate', 'severely damage'];
const natureObjects = ['the whole Planet Earth', 'the European continent', 'most of Asia', 'Australia', 'Central America'];

const politicsSubjects = ['Barack Obama', 'Donald Trump', 'Angela Merkel', 'George Clooney', 'Madonna'];
const politicsActions = ['be elected President of', 'be crowned as the 1st Monarch of', 'be imprisoned for live in'];
const politicsObjects = ['the European Union', 'the Fiji Islands', 'Sri Lanka', 'Madagascar', 'Greenland'];

const personalSubjects = ['you', 'your best friend', 'your boss'];
const personalActions = ['marry', 'become a sworn enemy of', 'begin a Ponzi scheme with'];
const personalObjects = ['Cristiano Ronaldo', 'Boris Johnson', 'Jon Bon Jovi', 'Elon Musk', 'Greta Thunberg'];

mixedMessage();