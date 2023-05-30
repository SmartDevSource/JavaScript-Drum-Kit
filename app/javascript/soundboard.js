keys = document.querySelector("#keys").querySelectorAll(".keyBox");

const sounds = [
  { snd: "snare1", key: "a" },
  { snd: "snare2", key: "z" },
  { snd: "cymbal1", key: "e" },
  { snd: "scratch", key: "r" }
];

document.addEventListener("keydown", function(e)
{
  for (let i = 0 ; i < sounds.length ; i++)
  {
    if (e.key == sounds[i].key)
    {
      keys[i].classList.add("keyBox-play");
      let audio = document.getElementById(sounds[i].snd);
      audio.currentTime=0;
      audio.play();
      setTimeout(function() { keys[i].classList.remove("keyBox-play");}, 100);
    }
  }
});