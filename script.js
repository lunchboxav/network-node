var cy = cytoscape({
  container: document.getElementById('cy'),

  elements: {
    nodes: [
      { data: { id: 'p1' } },
      { data: { id: 'p2' } },
      { data: { id: 'a', parent: 'p1' }, position: { x: 215, y: 85 } },
      { data: { id: 'b', parent: 'p1' }, position: { x: 255, y: 85 } },
      { data: { id: 'c', parent: 'p1' }, position: { x: 295, y: 85 } },
      { data: { id: 'd', parent: 'p1' }, position: { x: 335, y: 85 } },
      { data: { id: 'e', parent: 'p2' }, position: { x: 215, y: 125 } },
      { data: { id: 'f', parent: 'p2' }, position: { x: 255, y: 125 } },
      { data: { id: 'g', parent: 'p2' }, position: { x: 295, y: 125 } },
      { data: { id: 'h', parent: 'p2' }, position: { x: 335, y: 125 } },

      { data: { id: 'i' }, position: { x: 215, y: 165 } },
      { data: { id: 'j' }, position: { x: 205, y: 205 } },
      { data: { id: 'k' }, position: { x: 225, y: 205 } },
      { data: { id: 'l' }, position: { x: 215, y: 245 } },
      { data: { id: 'm' }, position: { x: 205, y: 285 } },
      { data: { id: 'n' }, position: { x: 225, y: 285 } },
      { data: { id: 'o' }, position: { x: 215, y: 325 } },

      { data: { id: 'p' }, position: { x: 245, y: 165 } },
      { data: { id: 'q' }, position: { x: 265, y: 165 } },
      { data: { id: 'r' }, position: { x: 255, y: 205 } },
      { data: { id: 's' }, position: { x: 275, y: 205 } },
      { data: { id: 't' }, position: { x: 255, y: 285 } },
      { data: { id: 'u' }, position: { x: 255, y: 325 } },
      { data: { id: 'v' }, position: { x: 275, y: 325 } },

      { data: { id: 'w' }, position: { x: 315, y: 165 } },
      { data: { id: 'x' }, position: { x: 305, y: 205 } },
      { data: { id: 'y' }, position: { x: 325, y: 205 } },
      { data: { id: 'z' }, position: { x: 305, y: 245 } },
      { data: { id: 'aa' }, position: { x: 325, y: 245 } }
    ],
    edges: [
      { data: { id: 'ae', source: 'a', target: 'e' } },
      { data: { id: 'bf', source: 'b', target: 'f' } },
      { data: { id: 'cg', source: 'c', target: 'g' } },
      { data: { id: 'dh', source: 'd', target: 'h' } },

      { data: { id: 'ei', source: 'e', target: 'i' } },
      { data: { id: 'ij', source: 'i', target: 'j' } },
      { data: { id: 'ik', source: 'i', target: 'k' } },
      { data: { id: 'jl', source: 'j', target: 'l' } },
      { data: { id: 'kl', source: 'k', target: 'l' } },
      { data: { id: 'lm', source: 'l', target: 'm' } },
      { data: { id: 'ln', source: 'l', target: 'n' } },
      { data: { id: 'mo', source: 'm', target: 'o' } },
      { data: { id: 'no', source: 'n', target: 'o' } },

      { data: { id: 'fp', source: 'f', target: 'p' } },
      { data: { id: 'fq', source: 'f', target: 'q' } },
      { data: { id: 'pr', source: 'p', target: 'r' } },
      { data: { id: 'qr', source: 'q', target: 'r' } },
      { data: { id: 'qs', source: 'q', target: 's' } },
      { data: { id: 'su', source: 's', target: 'u' } },
      { data: { id: 'sv', source: 's', target: 'v' } },
      { data: { id: 'rt', source: 'r', target: 't' } },
      { data: { id: 'tu', source: 't', target: 'u' } },
      { data: { id: 'uv', source: 'u', target: 'v' } },

      { data: { id: 'gw', source: 'g', target: 'w' } },
      { data: { id: 'hw', source: 'h', target: 'w' } },
      { data: { id: 'wx', source: 'w', target: 'x' } },
      { data: { id: 'wy', source: 'w', target: 'y' } },
      { data: { id: 'xz', source: 'x', target: 'z' } },
      { data: { id: 'yaa', source: 'y', target: 'aa' } },
      { data: { id: 'zaa', source: 'z', target: 'aa' } }
    ]
  },

  style: [
    {
      selector: 'node',
      css: {
        height: 10,
        width: 10,
        'font-size': '6px',
        content: 'data(id)',
        'text-valign': 'center',
        'text-halign': 'center'
      }
    },
    {
      selector: ':parent',
      css: {
        'text-valign': 'top',
        'text-halign': 'center'
      }
    },
    {
      selector: 'edge',
      style: {
        width: 1,
        'line-color': '#ccc',
        'target-arrow-shape': 'none'
      }
    }
  ],

  layout: {
    name: 'preset',
    padding: 20
  }
});
