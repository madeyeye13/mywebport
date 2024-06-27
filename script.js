document.querySelector('.bx-menu-alt-right').addEventListener('click', function() {
            document.getElementById('menu-bar').style.transform = 'translateX(0)';
            document.querySelector('.bx-menu-alt-right').classList.add('hide');
            document.getElementById('close').classList.remove('hide');
        });

        document.getElementById('close').addEventListener('click', function() {
            document.getElementById('menu-bar').style.transform = 'translateX(-100%)';
            document.getElementById('close').classList.add('hide');
            document.querySelector('.bx-menu-alt-right').classList.remove('hide');
        });