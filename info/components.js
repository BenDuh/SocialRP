// Liste des composants
<App />
  <Header />
    <Deconnexion />
    <Title />
    <ProfileLogo /> // réutilisé dans la Sidebar de Room
      <ProfileModal /> // ou alors juste Modal et on réutilise dans CharCreate

  <Body />
    <Login />
      <LoginForm />
      <Button onClick={} text="" /> // x2

    <AccountMenu />
      <CharButton /> // x3
      <Button /> // x2

    <RoomMenu />
      <RoomList />
        <RoomLi />
      <Button />

    <RoomCreate />

    <Room />
      <SideBar />
        <ProfileLogo /> // pareil que dans le header
          <Modal />
      <Chat />
        <Messages />
          <Message />
        <MessageForm />
          <MessageInput />
          <Button />

    <CharCreate />
      <Race />
        <CharModal /> // ou bien le même Modal que dans ProfileLogo
      <Class />
        <CharModal /> // ou bien le même Modal que dans ProfileLogo

/*
  PROPOSITIONS :

  On utilise App comme router
  <App /> a une propriété dans le state { screen: "login" }
  Switch(this.state.screen) dans le render() pour savoir quel écran afficher
  Il faut que les boutons de changement d'écran modifient le state de <App />
  Il faut que <App /> ait une methode (screen_) => { this.setState({ screen: screen_ })}
    et qu'elle passe la méthode à ses enfants ?
    (un state global avec Redux serait mieux mais on ne sait pas faire)
  Ce state 'screen' peut aussi être passé à <Header /> pour savoir quoi afficher dans <Title />
*/