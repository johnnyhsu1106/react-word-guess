import { useMemo } from 'react'

const Keyboard = ({ 
  activeKeys, 
  inactiveKeys, 
  onClickKey, 
  isDisabled 
}) => {
  // Generate Keys from 'a' to 'z', only generated once.
  const keys = useMemo(() => {
    const keys = [];
    for (let i = 0; i < 26; i++) {
      keys.push(String.fromCharCode('a'.charCodeAt() + i))
    }
    return keys;
  }, []);

  return (
    <div className='keyboard-container'>
      <div className='keyboard'>
        {keys.map((key) => {
          const isActive = activeKeys.has(key);
          const isInactive = inactiveKeys.has(key);
          const btnClassName = `key ${isActive ? 'active' : ''}${isInactive ? 'inactive' : ''}`;
          return (
            <button
              className={btnClassName} 
              key={key}
              disabled={isActive || isInactive || isDisabled} 
              onClick={() => { onClickKey(key) }}
            >
              {key}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Keyboard