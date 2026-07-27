console.log("JS connected");
   let answers = {

        // ================= BIOLOGY =================
        "what is the basic unit of life": "The basic unit of life is the cell. A cell is the smallest structure in a living organism that can perform all essential functions such as respiration, growth, and reproduction. For example, human body is made up of billions of cells, including muscle cells, nerve cells, and blood cells.",

        "what is photosynthesis": "Photosynthesis is the process by which green plants prepare their food using sunlight, carbon dioxide, and water. This process takes place in the leaves, specifically in chloroplasts. For example, plants use sunlight to convert CO2 and water into glucose and oxygen.",

        "which organ pumps blood": "The heart is the organ responsible for pumping blood throughout the body. It continuously pushes oxygen-rich blood to all parts of the body and brings back oxygen-poor blood to be purified in the lungs. For example, your heart beats about 60–100 times per minute.",

        "what is dna": "DNA (Deoxyribonucleic Acid) is the genetic material found in all living organisms. It carries instructions for growth, development, and functioning of the body. For example, DNA determines traits like eye color, hair type, and height.",

        "process by which plants lose water": "The process by which plants lose water is called transpiration. It occurs mainly through small openings in leaves called stomata. For example, during hot weather, plants lose more water through transpiration.",

        "what are enzymes": "Enzymes are biological catalysts that speed up chemical reactions in living organisms. They are usually proteins and are very specific in their function. For example, digestive enzymes help break down food in our stomach.",

        "function of red blood cells": "Red blood cells (RBCs) transport oxygen from the lungs to different parts of the body and carry carbon dioxide back to the lungs. They contain hemoglobin which binds oxygen. For example, without RBCs, body cells would not receive oxygen.",

        "define ecosystem": "An ecosystem is a community of living organisms such as plants, animals, and microorganisms interacting with their physical environment. For example, a forest ecosystem includes trees, animals, soil, water, and climate.",

        "what is respiration": "Respiration is the process by which living organisms break down food to release energy. This energy is used for growth, movement, and other life processes. For example, humans use oxygen to break down glucose and release energy.",

        "which part of plant makes food": "Leaves are the main part of the plant that makes food through photosynthesis. They contain chlorophyll which captures sunlight. For example, green leaves convert sunlight into energy.",

        // ================= PHYSICS =================
        "what is force": "Force is a push or pull acting on an object that can change its shape, speed, or direction. It is measured in Newtons (N). For example, pushing a door or pulling a rope are examples of force.",

        "newton first law": "Newton’s First Law states that an object will remain at rest or continue moving in a straight line unless acted upon by an external force. For example, a ball will not move unless someone kicks it.",

        "what is velocity": "Velocity is the speed of an object in a specific direction. It is a vector quantity. For example, saying a car moves at 60 km/h east is velocity.",

        "what is gravity": "Gravity is the force that attracts objects toward the center of the Earth. It keeps us grounded and controls the motion of planets. For example, when you drop a ball, it falls due to gravity.",

        "what is energy": "Energy is the ability to do work. It exists in different forms such as kinetic, potential, thermal, and electrical energy. For example, a moving car has kinetic energy.",

        "define work in physics": "Work is done when a force is applied to an object and it moves in the direction of the force. Work = Force × Distance. For example, lifting a book from table involves work.",

        "what is power": "Power is the rate at which work is done. It tells how fast work is completed. It is measured in watts. For example, a machine that completes work faster has more power.",

        "what is electric current": "Electric current is the flow of electric charge through a conductor. It is measured in amperes (A). For example, current flows through wires to power devices like fans and lights.",

        "what is a simple circuit": "A simple circuit is a closed loop that allows electric current to flow. It usually includes a battery, wires, and a bulb. For example, when the circuit is complete, the bulb lights up.",

        "what is friction": "Friction is a force that opposes motion between two surfaces in contact. It can slow down or stop movement. For example, brakes in a car use friction to stop the vehicle.",

        // ================= CHEMISTRY =================
        "what is an atom": "An atom is the smallest unit of matter that retains the properties of an element. It consists of protons, neutrons, and electrons. For example, hydrogen atom has one proton and one electron.",

        "what is a molecule": "A molecule is formed when two or more atoms chemically bond together. It can be of same or different elements. For example, H2O (water) is a molecule made of hydrogen and oxygen.",

        "define element": "An element is a pure substance that consists of only one type of atom. It cannot be broken down into simpler substances. For example, oxygen and gold are elements.",

        "what is a compound": "A compound is a substance formed when two or more different elements combine chemically in a fixed ratio. For example, water (H2O) is a compound of hydrogen and oxygen.",

        "three states of matter": "The three states of matter are solid, liquid, and gas. Solids have fixed shape, liquids flow, and gases spread out. For example, ice (solid), water (liquid), steam (gas).",

        "what is a chemical reaction": "A chemical reaction is a process in which substances change into new substances with different properties. For example, burning wood produces ash and gases.",

        "what is ph": "pH is a scale used to measure how acidic or basic a substance is, ranging from 0 to 14. For example, lemon juice is acidic (pH < 7) while soap is basic (pH > 7).",

        "what is periodic table": "The periodic table is a chart that organizes all chemical elements based on their atomic number and properties. For example, elements like hydrogen, oxygen, and carbon are arranged systematically.",

        "what is an acid": "An acid is a substance that releases hydrogen ions (H+) in solution and has pH less than 7. For example, hydrochloric acid and lemon juice are acids.",

        "what is a base": "A base is a substance that releases hydroxide ions (OH-) in solution and has pH greater than 7. For example, sodium hydroxide and soap are bases.",

        // ================= ENGLISH =================
        "what is a noun": "A noun is a word that names a person, place, thing, or idea. For example, Ali, city, book, and happiness are nouns.",

        "what is a verb": "A verb is a word that expresses an action or a state of being. For example, run, eat, and is are verbs.",

        "define adjective": "An adjective is a word that describes or gives more information about a noun. For example, in 'red apple', 'red' is an adjective.",

        "what is a sentence": "A sentence is a group of words that expresses a complete thought and has a subject and a verb. For example, 'She is reading a book.'",

        "what is a synonym": "A synonym is a word that has the same or similar meaning as another word. For example, 'happy' and 'joyful' are synonyms.",

        "what is an antonym": "An antonym is a word that has the opposite meaning of another word. For example, 'hot' and 'cold' are antonyms.",

        "what is a pronoun": "A pronoun is a word used in place of a noun to avoid repetition. For example, 'Ali is a boy. He is playing.' — 'He' is a pronoun.",

        "what is a tense": "Tense shows the time of an action in a sentence. There are three main types: past, present, and future. For example, 'She eats' (present), 'She ate' (past), 'She will eat' (future).",

        "what is punctuation": "Punctuation refers to symbols used to clarify meaning in sentences, such as comma, full stop, question mark, etc. For example, 'Hello, how are you?'",

        "what is an article in grammar": "Articles are words used before nouns to define them. There are three articles: 'a', 'an', and 'the'. For example, 'a book', 'an apple', 'the sun'."
    };
function getAnswer() {

  // STEP 1: get values
  let name = document.getElementById("studentName").value;
  let subject = document.getElementById("subject").value;
  let chatBox = document.getElementById("chatBox");

  // STEP 2: get input
  let input = document.getElementById("userInput").value
    .toLowerCase()
    .trim()
    .replace(/which/g, "what")
    .replace(/[^\w\s]/g, "")
    .replace(/which is/g, "what is")
    .replace(/define/g, "what is")
    .replace(/whats/g, "what is");

  // ✅ STEP 3: ADD THIS EXACTLY HERE (YOU DID CORRECT)
  input = input
    .replace("rbc", "red blood cells")
    .replace("heart pumps", "organ pumps blood")
    .replace("lose water", "plants lose water");

  // STEP 4: validations
  if (!name) {
    alert("Enter your name first!");
    return;
  }

  if (!subject) {
    alert("Select a subject!");
    return;
  }

  // STEP 5: show user
  chatBox.innerHTML += `<div class="user"><b>${name}:</b> ${input}</div>`;

  let found = false;

  // STEP 6: matching logic
  for (let key in answers) {

    let cleanKey = key
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/a |an |the |what is |define /g, "")
      .trim();

    let cleanInput = input
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/a |an |the |what is |define /g, "")
      .trim();

    if (
      cleanInput.includes(cleanKey) ||
      cleanKey.includes(cleanInput)
    ) {
      chatBox.innerHTML += `<div class="bot"><b>AI:</b> ${answers[key]}</div>`;
      found = true;
      break;
    }
  }

  // STEP 7: fallback
  if (!found) {
    chatBox.innerHTML += `<div class="bot"><b>AI:</b> ❌ I don't know this question yet.</div>`;
  }

  // STEP 8: clear input
  document.getElementById("userInput").value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
