import {
  addTask,
  editTask,
  removeFinishedTasks,
  removeTask,
  tasks,
} from '../tasks'

describe('tasks entity', () => {
  describe('action creators', () => {
    it.each([
      {
        title: 'A good task',
        description: 'Obviously a good tasks is good',
      },
      {
        title: 'A good task',
        description: 'Obviously a good tasks is good',
        isFinished: true,
      },
    ])('should create an action to add task', task => {
      const now = Date.now
      Date.now = () => 5

      expect(addTask(task)).toMatchSnapshot()

      Date.now = now
    })

    it('should create an action to remove task', () => {
      expect(removeTask('x')).toMatchSnapshot()
    })

    it('should create an action to edit task', () => {
      const id = 'x'
      const update = { title: 'New title for task', isFinished: true }
      expect(editTask(id, update)).toMatchSnapshot()
    })

    it('should create an action to remove all finished tasks', () => {
      expect(removeFinishedTasks()).toMatchSnapshot()
    })
  })

  describe('tasks reducer', () => {
    it.each([
      {
        title: 'A good task',
        description: 'Obviously a good tasks is good',
      },
      {
        title: 'A good task',
        description: 'Obviously a good tasks is good',
        isFinished: true,
      },
    ])('should handle "[Tasks] add"', task => {
      const now = Date.now
      Date.now = () => 5

      const action = addTask(task)

      expect(tasks(undefined, action)).toMatchSnapshot()

      Date.now = now
    })

    it('should handle "[Tasks] remove"', () => {
      const id = 'x'
      const state = {
        byId: {
          [id]: {
            id,
            title: 'A good task',
            description: 'Obviously a good tasks is good',
            isFinished: false,
          },
        },
        allIds: [id],
      }
      const action = removeTask(id)

      expect(tasks(state, action)).toMatchSnapshot()
    })

    it.each([
      { title: 'New title for task' },
      { description: 'New description for task' },
      { isFinished: true },
    ])('should handle "[Tasks] edit"', update => {
      const id = 'x'
      const state = {
        byId: {
          [id]: {
            id,
            title: 'A good task',
            description: 'Obviously a good tasks is good',
            isFinished: false,
          },
        },
        allIds: [id],
      }
      const action = editTask(id, update)

      expect(tasks(state, action)).toMatchSnapshot()
    })

    it('should handle "[Tasks] remove finished"', () => {
      const state = {
        byId: {
          x: {
            id: 'x',
            title: 'A good task',
            description: 'Obviously a good tasks is good',
            isFinished: true,
          },
          y: {
            id: 'y',
            title: 'Another good task',
            description: ':|',
            isFinished: false,
          },
        },
        allIds: ['x', 'y'],
      }
      const action = removeFinishedTasks()

      expect(tasks(state, action)).toMatchSnapshot()
    })
  })
})
