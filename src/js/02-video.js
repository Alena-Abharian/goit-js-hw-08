import VimeoPlayer from '@vimeo/player';
import lodashThrottle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframe);

player.on('timeupdate',
  lodashThrottle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000),
);

const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime)
  .then(function(seconds) {
  })
  .catch(function(error) {
    console.error(error);
  });
