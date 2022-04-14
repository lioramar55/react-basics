import React, { Component } from 'react'

export class WhoWatch extends Component {
  state = {
    users: [
      {
        name: 'Puki',
        movies: [
          'Shawshank redemption',
          'Matrix',
          'Pulp fiction',
        ],
        color: '#333',
      },
      {
        name: 'Muki',
        movies: [
          'Requiem for a dream',
          'Django',
          'Kill bill',
        ],
        color: '#999',
      },
      {
        name: 'Luki',
        movies: ['Straight outta compton', 'Fight club'],
        color: 'green',
      },
      {
        name: 'Tuki',
        movies: [
          'Shutter island',
          'Inception',
          'Last mile',
        ],
        color: 'gold',
      },
      {
        name: 'Shuki',
        movies: [
          'Guardians of the galaxy',
          'Matrix',
          'Pulp fiction',
        ],
        color: 'red',
      },
    ],
    editMode: false,
    isAddingUser: false,
    selectedUser: null,
  }
  getNewUser = (name = '') => {
    return { name, movies: [], color: randomColor() }
  }
  onUserClick = (selectedUser) => {
    this.setState({ selectedUser })
  }
  get userStyle() {
    return (
      'user ' + (this.state.editMode ? 'edit-mode' : '')
    )
  }
  addUser = (ev) => {
    ev.preventDefault()
    const { value } = ev.target.nickname
    const newUser = this.getNewUser(value)
    this.setState({
      users: [...this.state.users, newUser],
      isAddingUser: false,
    })
  }
  render() {
    return (
      <section className="who-watch">
        <h2>Who's watching?</h2>
        <div className="list">
          {!this.state.selectedUser &&
            this.state.users.map((user, idx) => (
              <div
                onClick={() => this.onUserClick(user)}
                key={idx + user.name}
                className={this.userStyle}
              >
                <svg
                  width="150"
                  height="150"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ backgroundColor: user.color }}
                >
                  <g
                    id="Page-1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Never-Users-Own-Profile"
                      fill="#FCFDFF"
                    >
                      <g
                        id="profile3"
                        transform="translate(31 50)"
                      >
                        <circle
                          id="left-eye"
                          cx="12"
                          cy="12"
                          r="12"
                        />
                        <circle
                          id="right-eye"
                          cx="123"
                          cy="12"
                          r="12"
                        />
                        <path
                          d="M89.5 66.67c13.55 0 27.1-5.93 40.66-17.78 1.3-.53 2.58-.2 3.87 1 1.3 1.17 1.3 2.7 0 4.54C119.5 67.48 104.67 74 89.5 74c-15.17 0-30-6.52-44.53-19.56-1.3-1.85-1.3-3.37 0-4.55 1.3-1.2 2.58-1.53 3.87-1C62.4 60.73 75.94 66.66 89.5 66.66z"
                          id="smile"
                        >
                          <animate
                            id="frown"
                            attributeName="d"
                            begin="4.5s;frown.end+9s"
                            dur="1s"
                            from="M89.5 66.67c13.55 0 27.1-5.93 40.66-17.78 1.3-.53 2.58-.2 3.87 1 1.3 1.17 1.3 2.7 0 4.54C119.5 67.48 104.67 74 89.5 74c-15.17 0-30-6.52-44.53-19.56-1.3-1.85-1.3-3.37 0-4.55 1.3-1.2 2.58-1.53 3.87-1C62.4 60.73 75.94 66.66 89.5 66.66z"
                            to="M89.5 56.67c13.55 0 27.1 4.07 40.66 12.22 1.23.73 1.5 1.77.84 3.1-.67 1.33-2 1.67-4 1-9.83-6-22.33-9-37.5-9-15.17 0-28 3.15-38.53 9.44C49 74.84 47.7 74.7 47 73c-.65-1.26-.03-2.63 1.84-4.1 13.55-8.16 27.1-12.23 40.66-12.23z"
                          />
                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
                <h3>{user.name}</h3>
              </div>
            ))}
          {this.state.selectedUser &&
            this.state.selectedUser.movies.map(
              (movie, idx) => (
                <div key={idx + movie} className="movie">
                  {movie}
                </div>
              )
            )}
        </div>
        <div className="btns">
          {!this.state.selectedUser && (
            <div className="user-btns">
              <span
                onClick={() =>
                  this.setState({
                    editMode: !this.state.editMode,
                  })
                }
              >
                {this.state.editMode
                  ? 'Done'
                  : 'Manage Users'}
              </span>
              <span
                onClick={() =>
                  this.setState({
                    isAddingUser: !this.state.isAddingUser,
                  })
                }
                className="plus"
              >
                ➕
              </span>
            </div>
          )}
          {this.state.selectedUser && (
            <span
              onClick={() =>
                this.setState({ selectedUser: null })
              }
            >
              Switch user
            </span>
          )}
        </div>

        {this.state.isAddingUser && (
          <div className="add-user">
            <h2>Add new user</h2>
            <form onSubmit={this.addUser}>
              <label>
                Nickname:
                <input
                  type="text"
                  name="nickname"
                  placeholder="Enter nickname..."
                />
              </label>
              <button>Add User</button>
            </form>
            <button
              onClick={() =>
                this.setState({ isAddingUser: false })
              }
              className="close"
            >
              x
            </button>
          </div>
        )}
      </section>
    )
  }
}

function randomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
