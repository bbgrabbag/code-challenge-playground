/**
 * @description - determine whether the list of tuples creates a valid dependency tree (no circular deps)
 * @difficulty - 5/5
 * s
 * @param {Array<[String, String]>} - array of tuples representing a dependency between two things represented as strings (i.e.  ['A', 'B'] where B depends on A)
 * @returns {Boolean}
 * 
 * @example - validateDependencies([['A','B'], ['B','C']]) // --> true
 * @example - validateDependencies([['A','B'], ['B','A']]) // --> false (B depends on A, which already depends on B, this is circular)
 */

const validateDependencies = (deps) => {
    const graph = deps.reduce((output, [key, dep]) => {
        if (key == dep) throw `${key} is a dependency of itself`;
        return {
            ...output,
            [key]: output[key] ? [...output[key], dep] : [dep]
        };
    }, {})

    const search = (k, children) => {
        if (!children) return false;
        for (const child of children) {
            if (child == k || search(k, graph[child])) return true;
        }
        return false;
    }

    for (const k in graph) {
        if (search(k, graph[k])) return false;
    }

    return true;
}

module.exports = validateDependencies;