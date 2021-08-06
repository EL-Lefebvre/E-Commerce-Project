import counterReducer, {
  iCounterState,
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
} from './counterSlice';
import { fetchCount } from './counterAPI';
import { configureStore } from '@reduxjs/toolkit';

jest.mock('./counterAPI', () => ({
  fetchCount: jest.fn(),
}));

describe('counter reducer', () => {
  const initialState: iCounterState = {
    value: 3,
    status: 'idle',
  };

  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });

  describe('incrementIfOdd', () => {
    it('should NOT increment when counter.value is an even number', () => {
      const store = configureStore({
        reducer: { counter: counterReducer },
      });
      store.dispatch(incrementIfOdd(1) as any);
      expect(store.getState().counter.value).toBe(0);
    });

    it('should increment when counter.value is an odd number', () => {
      const store = configureStore({
        reducer: { counter: counterReducer },
      });
      store.dispatch(increment()); // make counter.value odd -> ie: 1
      store.dispatch(incrementIfOdd(1) as any);
      expect(store.getState().counter.value).toBe(2);
    });
  });

  describe('incrementAsync', () => {
    // this test is instructived but has little value
    it('should return expected AsyncThunk', () => {
      expect(incrementAsync.typePrefix).toBe('counter/fetchCount');
      expect(incrementAsync.fulfilled.type).toBe(
        'counter/fetchCount/fulfilled'
      );
      expect(incrementAsync.pending.type).toBe('counter/fetchCount/pending');
      expect(incrementAsync.rejected.type).toBe('counter/fetchCount/rejected');
    });

    // this test is instructived but has little value
    it('should call reducer with expected payloads', async () => {
      const callArgument = 42;
      const initialState = undefined;
      const expected = {
        defaultAction: { type: expect.any(String) },
        pendingAction: {
          meta: {
            arg: callArgument,
            requestId: expect.any(String),
            requestStatus: 'pending',
          },
          payload: undefined,
          type: 'counter/fetchCount/pending',
        },
        fulfilledAction: {
          meta: {
            arg: callArgument,
            requestId: expect.any(String),
            requestStatus: 'fulfilled',
          },
          payload: callArgument,
          type: 'counter/fetchCount/fulfilled',
        },
      };
      const reducer = jest.fn();
      const store = configureStore({
        reducer,
      });

      (fetchCount as jest.Mock).mockResolvedValue({ data: callArgument });

      await store.dispatch(incrementAsync(callArgument));

      expect(reducer).toBeCalledTimes(3);
      expect(reducer).toBeCalledWith(initialState, expected.defaultAction);
      expect(reducer).toBeCalledWith(initialState, expected.pendingAction);
      expect(reducer).toBeCalledWith(initialState, expected.fulfilledAction);
    });

    it('should call fetchCount', async () => {
      const reducer = jest.fn();
      const store = configureStore({
        reducer,
      });
      const callArgument = 42;

      (fetchCount as jest.Mock).mockResolvedValue({ data: callArgument });

      await store.dispatch(incrementAsync(callArgument));

      expect(fetchCount).toBeCalledTimes(1);
      expect(fetchCount).toBeCalledWith(callArgument);
    });

    it('should trigger expected reducer state when pending', async () => {
      const store = configureStore({
        reducer: { counter: counterReducer },
      });
      const callArgument = 42;
      const initialCounterValue = 0;

      // note fetchCount is mocked
      await store.dispatch(incrementAsync(callArgument));

      expect(store.getState().counter.value).toBe(initialCounterValue);
      expect(store.getState().counter.status).toBe('loading');
    });

    it('should trigger expected reducer state when fulfilled', async () => {
      const store = configureStore({
        reducer: { counter: counterReducer },
      });
      const callArgument = 42;
      const initialCounterValue = 0;

      (fetchCount as jest.Mock).mockResolvedValue({ data: callArgument });

      await store.dispatch(incrementAsync(callArgument));

      expect(store.getState().counter.value).toBe(
        callArgument + initialCounterValue
      );
      expect(store.getState().counter.status).toBe('idle');
    });
  });
});
