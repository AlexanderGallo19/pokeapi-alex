import { act, renderHook } from "@testing-library/react";
import useForm from "../../src/hooks/useForm";

describe('useForm hook', () => {
  const initialState = { name: "", email: "" };

  test('should initialize with the provided state', () => {
    const { result } = renderHook(() => useForm(initialState));
    
    expect(result.current.formState).toEqual(initialState);
    expect(result.current.debouncedInputValue).toEqual(initialState);
  });

  test('should handle input changes correctly', () => {
    const { result } = renderHook(() => useForm(initialState));
    
    act(() => {
      result.current.handleInputChange({ target: { name: 'name', value: 'John Doe' } } as React.ChangeEvent<HTMLInputElement>);
    });
    
    expect(result.current.formState).toEqual({ ...initialState, name: 'John Doe' });
    expect(result.current.debouncedInputValue).toEqual(initialState); 
  });

  test('should debounce input values', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useForm(initialState));
    
    act(() => {
      result.current.handleInputChange({ target: { name: 'name', value: 'John Doe' } } as React.ChangeEvent<HTMLInputElement>);
    });
    
    act(() => {
      jest.advanceTimersByTime(500);
    });
    
    expect(result.current.debouncedInputValue).toEqual({ ...initialState, name: 'John Doe' });
    
    jest.useRealTimers();
  });

  test('should reset the form state correctly', () => {
    const { result } = renderHook(() => useForm(initialState));
    
    act(() => {
      result.current.handleInputChange({ target: { name: 'name', value: 'John Doe' } } as React.ChangeEvent<HTMLInputElement>);
    });
    
    expect(result.current.formState).toEqual({ ...initialState, name: 'John Doe' });
    
    act(() => {
      result.current.handleResetInput();
    });
    
    expect(result.current.formState).toEqual(initialState);
    expect(result.current.debouncedInputValue).toEqual(initialState); 
  });
});
