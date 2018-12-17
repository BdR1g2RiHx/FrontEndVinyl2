<template>
	<div class="Main">
		<div class="container">
			<!-- Шапка -->
			<div id="app-header">
				<header>
					<div class="row no-gutters">
						<div class="d-none d-md-block col-md-3 col-xl-3 align-self-center offset-xl-1" style="height: 36px;">
							<div class="row no-gutters">
								<div class="col mr-1">
									<input type="text" id="sch-line" :class="{'sch-line-act': SchIsFocused}" v-model="SchText" placeholder="Поиск"
									@focus="SchIsFocused = true" @blur="SchIsFocused = false">
								</div>
								<div class="col-auto">
									<div id="sch-btn">
										<transition name="sch-icon">
											<img src="img/search.png" v-if="!SchIsFocused && SchText === ''">
										</transition>
									</div>
								</div>
							</div>
						</div>
						<div class="col-3 d-md-none"></div>
						<div class="col-6 col-md-4 col-xl-3 offset-md-1">
							<router-link :to="{name: 'Home', params: {user}}"><img id="h-logo" src="img/logo.png" alt=""></router-link>
						</div>
						<!-- При маленьком экране с шапки убираются данные пользователя и добавляется кнопка-гамбургер -->
						<div class="col-3 col-xl-2 align-self-center offset-md-1"  style="height: 46px">
							<div class="row no-gutters justify-content-around">
								<div @click="redirect('Favorities')">
									<div class="d-none d-md-block col-auto pt-1 like-btn">
										<div class="menu-img" id="like-ico"></div>
									</div>
								</div>
								<div @click="redirect('User')">
									<div class="d-none d-md-block col-auto pt-1 prof-btn">
										<div class="menu-img" id="prof-ico"></div>
										<div id="b-count"><span>{{user.logged ? user.bonuses_count + ' б' : ''}}</span></div>
									</div>
								</div>
								<div @click="redirect('Basket')">
									<div class="col-auto pt-1 bask-btn">
										<div class="menu-img" id="bask-ico"></div>
										<div id="p-count"><span>{{user.logged ? user.prod_number : ''}}</span></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row no-gutters mt-3">
						<div class="d-none d-md-block col-md-4 col-xl-3 offset-xl-1">
							<router-link :to="{name: 'Catalog', params: {user}}"><button id="cat-btn">Каталог</button></router-link>
						</div>
						<div class="d-none d-md-block col-md-8 col-xl-7">
							<div class="row no-gutters justify-content-end">
								<div class="col-auto pt-3 head-nav">
									<ul>
										<li><router-link :to="{name: 'About', params: {user}}">О нас</router-link></li>
										<li><router-link :to="{name: 'Assessment', params: {user}}">Оценка состояния</router-link></li>
										<li><router-link :to="{name: 'Bonuses', params: {user}}">Бонусная программа</router-link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="row no-gutters">
						<div class="col-12 d-md-none mt-3">
							<transition name="sch-icon">
								<img src="img/search.png" v-if="!SchIsFocused && SchText === ''" id="sch-btn-sm">
							</transition>
							<input type="text" id="sch-line-sm" @focus="SchIsFocused = true" @blur="SchIsFocused = false"
							:class="{'sch-line-act': SchIsFocused}" v-model="SchText" placeholder="      Поиск">
						</div>
					</div>
				</header>
			</div>


			<main>
				<!-- Динамическая часть -->
				<router-view @logged="userInit($event)"/>
			</main>
		</div>


		<!-- Подвал -->
		<div id="app-footer">
			<footer>
				<div class="container">
					<div class="row no-gutters">
						<div class="col-7 col-xl-6 offset-xl-1">
							<div class="row no-gutters align-items-center">
								<div class="col-12 col-md-2">
									<router-link :to="{name: 'About', params: {user}}"><a href="#" class="ftr-lnk">О нас</a></router-link>
								</div>
								<div class="col-12 col-md-5">
									<router-link :to="{name: 'Assessment', params: {user}}"><a href="#" class="ftr-lnk">Оценка состояния</a></router-link>
								</div>
								<div class="col-12 col-md-5">
									<router-link :to="{name: 'Bonuses', params: {user}}"><a href="#" class="ftr-lnk">Бонусная программа</a></router-link>
								</div>
							</div>
						</div>
						<div class="col-5 col-md-2">
							<div class="row no-gutters align-items-center">
								<div class="col footer-logo">
									<router-link :to="{name: 'Home', params: {user}}"><img src="img/footer_logo.png" alt=""></router-link>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-3 col-xl-2">
							<div class="row no-gutters align-items-center ftr-phn">
								<div class="col" style="font-family: 'Proxima Nova Rg'; font-size: 1.25rem">8-931-228-13-37</div>
							</div>
						</div>
						<div class="col-12 col-xl-10 offset-xl-1">
							Все права защищены
						</div>
					</div>
				</div>
			</footer>
		</div>


		<!-- Боковое меню профиль (для sm) -->
		<div id="prof-menu" class="d-md-none" :class="{'m-showed': ShowProfMenu, 'm-no-showed': !ShowProfMenu}" :style="ShowProfMenu ? 'position: fixed; margin-left: 0' : 'position: absolute; margin-left:-50%'">
			<div class="container">
				<div class="row no-gutters pb-5">
					<div class="col-12 mt-3 mb-4">
						<div class="row no-gutters">
							<div class="col-3">
								<img src="img/prof_img.png" class="rounded-circle" style="width: 100%" id="ava" alt="">
							</div>
							<div class="col-auto pl-2 align-self-center">
								<div class="row no-gutters">
									<div class="col-12">
										<h5>{{user.logged ? user.login : 'Гость'}}</h5>
									</div>
									<div class="col-12">
										<span style="background: #fce5a1; font-family: 'Proxima Nova Rg'">{{user.logged ? user.bonuses_count + ' б.' : ''}}</span>
									</div>
								</div>

							</div>
						</div>

					</div>
					<div @click="ShowProfMenu = false" onclick="document.getElementsByClassName('ham1')[0].classList.toggle('active')" class="col-12 mt-3" style="border-bottom: 1px grey solid">
						<router-link :to="{name: 'User', params: {user}}">
							<div class="row no-gutters">
								<div class="col-2"><img src="img/profile.png" alt=""></div>
								<div class="col-10 pl-3"><h5>Профиль</h5></div>
							</div>
						</router-link>
					</div>
					<div @click="ShowProfMenu = false" onclick="document.getElementsByClassName('ham1')[0].classList.toggle('active')" class="col-12 mt-3" style="border-bottom: 1px grey solid">
						<router-link :to="{name: 'Favorities', params: {user}}">
							<div class="row no-gutters">
								<div class="col-2"><img src="img/like.png" alt=""></div>
								<div class="col-10 pl-3"><h5>Избранное</h5></div>
							</div>
						</router-link>
					</div>
					<div @click="ShowProfMenu = false" onclick="document.getElementsByClassName('ham1')[0].classList.toggle('active')" class="col-12 mt-3 mb-4">
						<router-link :to="{name: 'Basket', params: {user}}">
							<div class="row no-gutters">
								<div class="col-2"><img src="img/basket.png" alt=""></div>
								<div class="col-10 pl-3"><h5>Корзина</h5></div>
							</div>
						</router-link>
					</div>

					<div class="col-12"  onclick="document.getElementsByClassName('ham1')[0].classList.toggle('active')" @click="ShowProfMenu = false"><router-link :to="{name: 'About', params: {user}}"><h6>О нас</h6></router-link></div>
					<div class="col-12"  onclick="document.getElementsByClassName('ham1')[0].classList.toggle('active')" @click="ShowProfMenu = false"><router-link :to="{name: 'Assessment', params: {user}}"><h6>Оценка состояния</h6></router-link></div>
					<div class="col-12"  onclick="document.getElementsByClassName('ham1')[0].classList.toggle('active')" @click="ShowProfMenu = false"><router-link :to="{name: 'Bonuses', params: {user}}"><h6>Бонусная программа</h6></router-link></div>
				</div>
			</div>
			<div id="prof-menu-btn" @click="ShowProfMenu = !ShowProfMenu" :style="ShowProfMenu ? 'right:0' : 'right:-80px'">
				<svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
					<path
					class="line top"
					d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
					<path
					class="line middle"
					d="m 30,50 h 40" />
					<path
					class="line bottom"
					d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
				</svg>
			</div>

		</div>
	</div>
</template>

<script>

	export default {
		data () {
			return {
        //для анимации поисковой строки
        SchIsAct: false,
        SchText: "",
        SchIsFocused: false,


        //сразу при входе пользователь считается гостем
        user: {
        	user_id: -1,
        	logged: false,
        },

        //показ бокового меню (по кнопке-гамбургеру)
        ShowProfMenu: false,

    }
},
methods: {
	redirect(n) {
		this.$router.push({ name: n, params: {user: this.user}});
	},
      userInit(e) { //при получении данных пользователя (вход или регистрация)
      	this.user.user_id = e.user_id;
      	this.user.login = e.login;
      	this.user.photo = e.photo;
      	this.user.bonuses_count = e.bonuses;
      	this.user.prod_number = e.basket;
      	this.user.logged = true;

        //редирект на главную
        this.$router.push({name: 'Home', params: {user: this.user}});
    }
},
created() {
    	//чтобы сразу при входе видели главную
    	this.$router.replace({name: 'Home', params: {user: this.user}});
    },
}
</script>

<style lang="scss">
@import './style/data.scss';

.uppercase {
  text-transform: uppercase;
}

nav {
  ul{
    text-align:left;
    margin-bottom: 0px;
    padding: 0px;
  }
  ul > li{
    display: inline-block;
    vertical-align: bottom;
  }
  ul > li a{
    display: block;
    padding: 0 10px;
    font-size: 20px;
    text-decoration: none;
    position: relative;
  }
  a, a:hover, a:active, a:visited {
    color: $greytext;
  }
  a:hover, a:active {
  text-decoration: underline;

  };
  a:active {
    background: $light;
  }

  ul > li a:before{
    content: '/';
    position: absolute; top: 25%; left: 0;
    height: 16px;
    margin-top: -6px;
    margin-left: -4px; 
  }
  ul > li:first-child a:before{
    content: '';
  }
}


input[type=checkbox] {
  opacity: 0;
  float:left;
}

input[type=checkbox] + label {
  margin: 0 0 0 20px;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  float: left;
}

input[type=checkbox] + label ~ label {
  margin: 0 0 0 40px;
}

input[type=checkbox] + label::before {
  content: ' ';
  position: absolute;
  left: -35px;
  top: -3px;
  width: 25px;
  height: 25px;
  display: block;
  background: white;
  border: 1px solid #A9A9A9;
}

input[type=checkbox] + label::after {
  content: ' ';
  position: absolute;
  left: -35px;
  top: -3px;
  width: 23px;
  height: 23px;
  display: block;
  z-index: 1;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjE4MS4yIDI3MyAxNyAxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAxODEuMiAyNzMgMTcgMTYiPjxwYXRoIGQ9Ik0tMzA2LjMgNTEuMmwtMTEzLTExM2MtOC42LTguNi0yNC04LjYtMzQuMyAwbC01MDYuOSA1MDYuOS0yMTIuNC0yMTIuNGMtOC42LTguNi0yNC04LjYtMzQuMyAwbC0xMTMgMTEzYy04LjYgOC42LTguNiAyNCAwIDM0LjNsMjMxLjIgMjMxLjIgMTEzIDExM2M4LjYgOC42IDI0IDguNiAzNC4zIDBsMTEzLTExMyA1MjQtNTI0YzctMTAuMyA3LTI1LjctMS42LTM2eiIvPjxwYXRoIGZpbGw9IiMzNzM3MzciIGQ9Ik0xOTcuNiAyNzcuMmwtMS42LTEuNmMtLjEtLjEtLjMtLjEtLjUgMGwtNy40IDcuNC0zLjEtMy4xYy0uMS0uMS0uMy0uMS0uNSAwbC0xLjYgMS42Yy0uMS4xLS4xLjMgMCAuNWwzLjMgMy4zIDEuNiAxLjZjLjEuMS4zLjEuNSAwbDEuNi0xLjYgNy42LTcuNmMuMy0uMS4zLS4zLjEtLjV6Ii8+PHBhdGggZD0iTTExODcuMSAxNDMuN2wtNTYuNS01Ni41Yy01LjEtNS4xLTEyLTUuMS0xNy4xIDBsLTI1My41IDI1My41LTEwNi4yLTEwNi4yYy01LjEtNS4xLTEyLTUuMS0xNy4xIDBsLTU2LjUgNTYuNWMtNS4xIDUuMS01LjEgMTIgMCAxNy4xbDExNC43IDExNC43IDU2LjUgNTYuNWM1LjEgNS4xIDEyIDUuMSAxNy4xIDBsNTYuNS01Ni41IDI2Mi0yNjJjNS4yLTMuNCA1LjItMTIgLjEtMTcuMXpNMTYzNC4xIDE2OS40bC0zNy43LTM3LjdjLTMuNC0zLjQtOC42LTMuNC0xMiAwbC0xNjkuNSAxNjkuNS03MC4yLTcxLjljLTMuNC0zLjQtOC42LTMuNC0xMiAwbC0zNy43IDM3LjdjLTMuNCAzLjQtMy40IDguNiAwIDEybDc3LjEgNzcuMSAzNy43IDM3LjdjMy40IDMuNCA4LjYgMy40IDEyIDBsMzcuNy0zNy43IDE3NC43LTE3Ni40YzEuNi0xLjcgMS42LTYuOS0uMS0xMC4zeiIvPjwvc3ZnPg==') no-repeat center center;
  -ms-transition: all .2s ease;
  -webkit-transition: all .2s ease;
  transition: all .3s ease;
  -ms-transform: scale(0);
  -webkit-transform: scale(0);
  transform: scale(0);
  opacity: 0;
}

input[type=checkbox]:checked + label::after {
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}


* {
	font-family: 'Raleway';
	outline:0 none !important;
	label {
		cursor: pointer;
	}
	-moz-user-select: none;
	-o-user-select:none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;

	.container {
		margin-top: 25px !important;
	}

	.pointer {
		cursor: pointer;
	}

	a, a:hover, a:active, a:visited {
		color: $dark;
	}
	a:hover, a:active {
		text-decoration: underline;

	};

	/*Header*/
	#app-header {

		#h-logo {
			width: 100%
		}

		#cat-btn {
			width: 100%;
			height: 50px;
			font-size: 32px;
			background: $dark;
			border: none;
			color: white;
			&:hover {
				background: $light;
				color: $dark;
			}
		}


		#sch-line {
			width: 90%;
			color: $dark;
			border: none;
			border-bottom: 1px $dark solid;
			display: inline-block;
		}
		#sch-btn {
			width: 21px;
			height: 24px;
			display: inline-block;
		}
		.sch-line-act {
			border-bottom: 4px $dark solid !important;
		}
		.sch-line, .sch-line-sm {
			transition: border 0.5s;
		}


		#sch-line-sm {
			width: 100%;
			color: $dark;
			border: none;
			border-bottom: 1px $dark solid;
		}
		#sch-btn-sm {
			position: absolute;
			top: 3px;
			left: 3px
		}


		/*кнопка избранное, профиль, корзина*/
		.like-btn, .prof-btn, .bask-btn {
			padding: 0;
			cursor: pointer;
			#like-ico {
				width: 30px;
				height: 25px;
				background-repeat: no-repeat;
				background-position: center;
			}
			#prof-ico {
				width: 30px;
				height: 28px;
				background-repeat: no-repeat;
				background-position: center;
			}

			#b-count {
				width: 60px;
				text-align: center;
				position: absolute;
				top: 25px;
				left: -5px;
				span {
					background-color: $light;
				}
			}

			#bask-ico {
				width: 30px;
				height: 28px;
				background-repeat: no-repeat;
				background-position: center;
			}

			#p-count {
				width: 60px;
				text-align: center;
				position: absolute;
				top: 25px;
				left: -5px;
				span {
					background-color: $light;
				}
			}
		}

		/*о нас, оценка состояния, бонусы*/
		ul{
			text-align: center;
			margin-bottom: 0px;
		}
		ul > li{
			display: inline-block;
			vertical-align: bottom;
		}
		ul > li a{
			display: block;
			padding: 0 10px;
			text-decoration: none;
			position: relative;
		}
		a, a:hover, a:active, a:visited {
			color: $dark;
		}
		a:hover, a:active {
			text-decoration: underline;

		};
		.head-nav{
			a:active {
				background: $light;
			}
		}
		ul > li a:before{
			content: '|';
			position: absolute; top: 25%; left: 0;
			height: 16px;
			margin-top: -6px;
			margin-left: -4px; 
		}
		ul > li:first-child a:before{
			content: '';
		}


		/*анимация на кнопку поиска*/
		.sch-icon-enter-active {
			animation: sch-to-txt .5s;
		}
		.sch-icon-leave-active {
			animation: sch-to-txt .5s reverse;
		}
		@keyframes sch-to-txt {
			0% {
				transform: scaleX(0);
			}
			100% {
				transform: scaleX(1);
			}
		}


	}

}


/*подвал*/
#app-footer {
	*, a {
		color: $grey;
	}

	.container, .row {
		height: 100%
	}

	footer {
		background: $dark;
		height: 136px;
	}
	.footer-logo {
		border-left: 1px #d1d5c3 solid;
	}
	.footer-phone {
		text-align: right;
	}

	@media (min-width: 768px) {
		.ftr-phn {
			text-align: right;
		}
	}

	@media (max-width: 768px) {
		.ftr-phn {
			text-align: left;
		}
	}
}

/*боковое меню*/
#prof-menu {
	top: 0;
	left: 0;
	position: absolute;
	width: 50%;
	height: 100%;

	background: white;
	border: 1px $grey solid;

	z-index: 15;
	#prof-menu-btn {
		position: absolute;
		top: 0;

		.ham {
			cursor: pointer;
			-webkit-tap-highlight-color: transparent;
			transition: transform 400ms;
			-moz-user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}
		.hamRotate.active {
			transform: rotate(45deg);
		}
		.hamRotate180.active {
			transform: rotate(180deg);
		}
		.line {
			fill:none;
			transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
			stroke:#000;
			stroke-width:5.5;
			stroke-linecap:round;
		}
		.ham1 .top {
			stroke-dasharray: 40 139;
		}
		.ham1 .bottom {
			stroke-dasharray: 40 180;
		}
		.ham1.active .top {
			stroke-dashoffset: -98px;
		}
		.ham1.active .bottom {
			stroke-dashoffset: -138px;
		}
	}
}
</style>
