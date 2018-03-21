import test from 'ava';
import Log from '../lib/log';
import Completion from '../lib/completion';
import TaskTree from '../lib/taskTree';

test('should log message', async t => {
  Log('testing');
  t.pass();
});

test('should fail with message', async t => {
  const fn = () => Completion();
  const error = await t.throws(fn);
  t.is(error.message, 'Missing completion type');
});

test('should fail with message', async t => {
  const fn = () => Completion({});
  const error = await t.throws(fn);
  console.log('error: ' + error);
  t.is(error.message, 'Missing completion type');
});

test('should return task tree', async t => {
  const arr = ['a', 'b', 'c'];
  const expected = {nodes:[{label:'0',nodes:undefined,},{label:'1',nodes:undefined,},{label:'2',nodes:undefined,},]};
  const message = await TaskTree(arr);
  t.is(JSON.stringify(message), JSON.stringify(expected));
});


