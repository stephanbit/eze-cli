var TaskTree = function(tasks) {
  return Object.keys(tasks).reduce(function(prev, task) {
    prev.nodes.push({
      label: task,
      nodes: tasks[task].dep
    });
    return prev;
  }, {nodes: []});
};

module.exports = TaskTree;
