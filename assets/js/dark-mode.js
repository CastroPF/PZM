(function () {
  const STORAGE_KEY = 'dark-mode';

  function readPreference() {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'enabled';
    } catch (error) {
      return false;
    }
  }

  function writePreference(enabled) {
    try {
      localStorage.setItem(STORAGE_KEY, enabled ? 'enabled' : 'disabled');
    } catch (error) {
      // Ignore write errors (e.g., private mode)
    }
  }

  function updateBodyClass(enabled) {
    if (document.body) {
      document.body.classList.toggle('dark-mode', enabled);
    }
  }

  function dispatchChange(enabled) {
    document.dispatchEvent(
      new CustomEvent('dark-mode-change', {
        detail: { enabled },
      }),
    );
  }

  function syncToggleState(toggles, enabled, source) {
    toggles.forEach((toggle) => {
      if (toggle !== source) {
        toggle.checked = enabled;
      }
    });
  }

  function applyState(enabled, toggles, source) {
    updateBodyClass(enabled);
    writePreference(enabled);
    syncToggleState(toggles, enabled, source);
    dispatchChange(enabled);
  }

  function initialize() {
    const body = document.body;
    if (!body) {
      return;
    }

    const toggles = Array.from(document.querySelectorAll('.checkbox'));
    const initialEnabled = readPreference();

    updateBodyClass(initialEnabled);
    toggles.forEach((toggle) => {
      toggle.checked = initialEnabled;
      toggle.addEventListener('change', () => {
        applyState(Boolean(toggle.checked), toggles, toggle);
      });
    });

    window.addEventListener('storage', (event) => {
      if (event.key !== STORAGE_KEY) {
        return;
      }
      const enabled = event.newValue === 'enabled';
      updateBodyClass(enabled);
      toggles.forEach((toggle) => {
        toggle.checked = enabled;
      });
      dispatchChange(enabled);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();
