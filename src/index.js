import './styles/main.scss';
import home from './assets/home.svg';
import profile from './assets/profile.svg';
import message from './assets/message.svg';
import clock from './assets/clock.svg';
import notes from './assets/notes.svg';
import people from './assets/people.svg';
import cog from './assets/cog.svg';
import question from './assets/question.svg';
import sheild from './assets/shield-check.svg';

const homeIcon = document.querySelector('.nav__icon[data-icon="home"]');
homeIcon.src = home;
const profileIcon = document.querySelector('.nav__icon[data-icon="profile"]');
profileIcon.src = profile;
const messageIcon = document.querySelector('.nav__icon[data-icon="messages"]');
messageIcon.src = message;
const clockIcon = document.querySelector('.nav__icon[data-icon="history"]');
clockIcon.src = clock;
const notesIcon = document.querySelector('.nav__icon[data-icon="tasks"]');
notesIcon.src = notes;
const peopleIcon = document.querySelector(
	'.nav__icon[data-icon="communities"]'
);
peopleIcon.src = people;
const cogIcon = document.querySelector('.nav__icon[data-icon="settings"]');
cogIcon.src = cog;
const questionIcon = document.querySelector('.nav__icon[data-icon="support"]');
questionIcon.src = question;
const shieldIcon = document.querySelector('.nav__icon[data-icon="privacy"]');
shieldIcon.src = sheild;
