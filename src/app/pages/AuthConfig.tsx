import { useMemo, useState } from 'react';
import { toast } from 'sonner';
import { loadPageConfig, savePageConfig } from '../services/adminConfig';

const PAGE_OPTIONS = [
  { key: 'home', label: 'Home' },
  { key: 'services', label: 'Services' },
  { key: 'products', label: 'Products' },
  { key: 'get-started', label: 'Get Started' },
  { key: 'contact', label: 'Contact' },
] as const;

type PageKey = typeof PAGE_OPTIONS[number]['key'];

type ConfigValue = string | number | boolean | ConfigObject | ConfigArray;
interface ConfigObject {
  [key: string]: ConfigValue;
}
type ConfigArray = ConfigValue[];

export function AuthConfigPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pageKey, setPageKey] = useState<PageKey>('home');
  const [config, setConfig] = useState<ConfigObject | null>(null);
  const [rawJson, setRawJson] = useState('');
  const [showJson, setShowJson] = useState(false);
  const [loading, setLoading] = useState(false);
  const [commit, setCommit] = useState(false);
  const [commitMessage, setCommitMessage] = useState('Update landing config');

  const pageLabel = useMemo(
    () => PAGE_OPTIONS.find((option) => option.key === pageKey)?.label ?? pageKey,
    [pageKey],
  );

  const handleLoad = async () => {
    if (!username || !password) {
      toast.error('Enter admin credentials to load the config.');
      return;
    }
    try {
      setLoading(true);
      const result = await loadPageConfig(pageKey, username, password);
      if (!result) {
        throw new Error('Empty config received');
      }
      setConfig(result);
      setRawJson(JSON.stringify(result, null, 2));
      toast.success('Config loaded');
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message || 'Failed to load config');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!username || !password) {
      toast.error('Enter admin credentials to save.');
      return;
    }
    if (!config) {
      toast.error('Load a config before saving.');
      return;
    }
    try {
      setLoading(true);
      await savePageConfig(pageKey, username, password, config, {
        commit,
        commitMessage,
      });
      setRawJson(JSON.stringify(config, null, 2));
      toast.success('Config saved' + (commit ? ' and commit queued' : ''));
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message || 'Failed to save config');
    } finally {
      setLoading(false);
    }
  };

  const applyJsonToForm = () => {
    try {
      const parsed = JSON.parse(rawJson);
      if (typeof parsed !== 'object' || parsed === null) {
        throw new Error('Invalid JSON root');
      }
      setConfig(parsed as ConfigObject);
      toast.success('Form updated from JSON');
    } catch (error: any) {
      toast.error(error?.message || 'Invalid JSON. Please fix and try again.');
    }
  };

  const syncJsonFromForm = () => {
    if (config) {
      setRawJson(JSON.stringify(config, null, 2));
      toast('JSON synced from form');
    }
  };

  const handlePageChange = (key: PageKey) => {
    setPageKey(key);
    setConfig(null);
    setRawJson('');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="rounded-2xl bg-white shadow border border-slate-100 p-6 space-y-4">
          <div>
            <p className="text-sm uppercase tracking-wider text-slate-500">Auth Config Studio</p>
            <h1 className="text-2xl font-semibold text-slate-900">Edit page content without touching code</h1>
            <p className="text-sm text-slate-500">
              Use admin credentials to load and persist the JSON that powers each page. The form mirrors the structure of the configuration, but you can also paste raw JSON if needed.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {PAGE_OPTIONS.map((option) => (
              <button
                key={option.key}
                type="button"
                className={`px-4 py-2 rounded-lg border ${
                  pageKey === option.key
                    ? 'border-cyan-600 bg-cyan-50 text-cyan-700'
                    : 'border-slate-200 text-slate-600'
                }`}
                onClick={() => handlePageChange(option.key)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="flex flex-col text-sm font-medium text-slate-700">
              Admin Username
              <input
                className="mt-1 rounded-lg border border-slate-200 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
            <label className="flex flex-col text-sm font-medium text-slate-700">
              Admin Password
              <input
                type="password"
                className="mt-1 rounded-lg border border-slate-200 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <button
              onClick={handleLoad}
              disabled={loading}
              className="px-5 py-2 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 disabled:opacity-60"
            >
              {loading ? 'Loading…' : `Load ${pageLabel} config`}
            </button>
            <button
              onClick={handleSave}
              disabled={loading || !config}
              className="px-5 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 disabled:opacity-60"
            >
              {loading ? 'Saving…' : 'Save'}
            </button>
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" checked={commit} onChange={(event) => setCommit(event.target.checked)} />
              Commit to GitHub
            </label>
            {commit && (
              <input
                className="px-3 py-2 border border-slate-200 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                value={commitMessage}
                onChange={(event) => setCommitMessage(event.target.value)}
                placeholder="Commit message"
              />
            )}
            <button
              type="button"
              className="ml-auto text-sm text-cyan-600 hover:underline"
              onClick={() => setShowJson((prev) => !prev)}
            >
              {showJson ? 'Hide JSON' : 'Advanced JSON'}
            </button>
          </div>
        </div>

        {showJson && (
          <div className="rounded-2xl bg-white shadow border border-slate-100 p-4 space-y-3">
            <div className="flex gap-3">
              <button
                type="button"
                className="px-3 py-1 text-sm text-slate-700 border border-slate-200 rounded-lg"
                onClick={syncJsonFromForm}
              >
                Sync from form
              </button>
              <button
                type="button"
                className="px-3 py-1 text-sm text-slate-700 border border-slate-200 rounded-lg"
                onClick={applyJsonToForm}
              >
                Apply JSON to form
              </button>
            </div>
            <textarea
              className="w-full h-72 rounded-lg border border-slate-200 bg-slate-900 text-slate-100 font-mono text-sm p-3"
              value={rawJson}
              onChange={(event) => setRawJson(event.target.value)}
            />
          </div>
        )}

        <div className="rounded-2xl bg-white shadow border border-slate-100 p-6">
          {config ? (
            <ConfigForm value={config} onChange={setConfig} />
          ) : (
            <p className="text-sm text-slate-500">
              {`Load the ${pageLabel.toLowerCase()} configuration to edit it here.`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function ConfigForm({
  value,
  onChange,
}: {
  value: ConfigObject;
  onChange: (next: ConfigObject) => void;
}) {
  const entries = Object.entries(value);

  return (
    <div className="space-y-6">
      {entries.map(([key, fieldValue]) => (
        <div key={key} className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700">{key}</span>
          </div>
          <FieldRenderer
            value={fieldValue}
            onChange={(next) => onChange({ ...value, [key]: next })}
          />
        </div>
      ))}
    </div>
  );
}

function FieldRenderer({
  value,
  onChange,
}: {
  value: ConfigValue;
  onChange: (next: ConfigValue) => void;
}) {
  if (Array.isArray(value)) {
    return (
      <ArrayEditor arrayValue={value as ConfigArray} onChange={onChange} />
    );
  }

  if (typeof value === 'object' && value !== null) {
    return (
      <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
        <ConfigForm value={value as ConfigObject} onChange={onChange as (next: ConfigObject) => void} />
      </div>
    );
  }

  return (
    <textarea
      className="w-full min-h-[96px] rounded-lg border border-slate-200 px-3 py-2 text-sm font-mono"
      rows={3}
      value={value ?? ''}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

function ArrayEditor({
  arrayValue,
  onChange,
}: {
  arrayValue: ConfigArray;
  onChange: (next: ConfigArray) => void;
}) {
  const firstItem = arrayValue[0];
  const isObjectArray = firstItem && typeof firstItem === 'object' && !Array.isArray(firstItem);

  const handlePrimitiveChange = (text: string) => {
    const lines = text.split(/\r?\n/).map((line) => line.trim());
    const filtered = lines.filter((line) => line.length);
    onChange(filtered);
  };

  const handleItemChange = (index: number, next: ConfigObject) => {
    const updated = arrayValue.map((item, idx) => (idx === index ? next : item));
    onChange(updated);
  };

  const addItem = () => {
    if (isObjectArray) {
      const blank = createBlankValue(firstItem ?? {});
      onChange([...arrayValue, blank]);
      return;
    }
    onChange([...arrayValue, '']);
  };

  const removeItem = (index: number) => {
    onChange(arrayValue.filter((_, idx) => idx !== index));
  };

  if (isObjectArray) {
    return (
      <div className="space-y-4">
        {arrayValue.map((item, index) => (
          <div key={index} className="space-y-3 rounded-xl border border-slate-200 bg-white/80 p-4">
            <div className="flex items-center justify-between text-sm font-medium text-slate-600">
              <span>Item #{index + 1}</span>
              <button
                type="button"
                className="text-xs text-rose-500"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </div>
            <ConfigForm
              value={item as ConfigObject}
              onChange={(next) => handleItemChange(index, next)}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="text-sm text-cyan-600 hover:underline"
        >
          + Add item
        </button>
      </div>
    );
  }

  const primitiveString = (arrayValue as string[]).join('\n');

  return (
    <textarea
      className="w-full min-h-[96px] rounded-lg border border-slate-200 px-3 py-2 text-sm font-mono"
      rows={4}
      value={primitiveString}
      onChange={(event) => handlePrimitiveChange(event.target.value)}
    />
  );
}

function createBlankValue(example: ConfigValue): ConfigValue {
  if (Array.isArray(example)) {
    return [];
  }
  if (typeof example === 'object' && example !== null) {
    const next: ConfigObject = {};
    Object.entries(example).forEach(([key, value]) => {
      next[key] = createBlankValue(value);
    });
    return next;
  }
  if (typeof example === 'number') {
    return 0;
  }
  if (typeof example === 'boolean') {
    return false;
  }
  return '';
}
