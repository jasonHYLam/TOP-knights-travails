(()=>{let e=new class{constructor(e){this.numVertices=e,this.AdjList=new Map}addVertex(e){this.AdjList.set(e,[])}getVertex(e,t){for(let[v,d]of this.AdjList)if(e===v[0]&&t===v[1])return v}addEdge(e,t){this.AdjList.get(e).push(t),this.AdjList.get(t).push(e)}printGraph(){let e=this.AdjList.keys();for(let t of e)this.AdjList.get(t);for(let e of getValues)conc+=e+" ";console.log(i+" -> "+conc)}}(64),t=[];for(let e=0;e<8;e++)for(let v=0;v<8;v++){let d=[e,v];t.push(d)}for(v of t)e.addVertex(v);for(v of t){if(v[0]+2<8&&v[1]+1<8){let t=e.getVertex(v[0]+2,v[1]+1);e.addEdge(v,t)}if(v[0]+1<8&&v[1]+2<8){let t=e.getVertex(v[0]+1,v[1]+2);e.addEdge(v,t)}if(v[0]-1>=0&&v[1]+2<8){let t=e.getVertex(v[0]-1,v[1]+2);e.addEdge(v,t)}if(v[0]-2>=0&&v[1]+1<8){let t=e.getVertex(v[0]-2,v[1]+1);e.addEdge(v,t)}if(v[0]-2>=0&&v[1]-1>=0){let t=e.getVertex(v[0]-2,v[1]-1);e.addEdge(v,t)}if(v[0]-1>=0&&v[1]-2>=0){let t=e.getVertex(v[0]-1,v[1]-2);e.addEdge(v,t)}if(v[0]+1<8&&v[1]-2>=0){let t=e.getVertex(v[0]+1,v[1]-2);e.addEdge(v,t)}if(v[0]+2<8&&v[1]-1>=0){let t=e.getVertex(v[0]+2,v[1]-1);e.addEdge(v,t)}}console.log(e)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsRUFBSSxHQUFLQSxFQUFFLEdBQUcsR0FBSSxFQUFHLENBQzFCLElBQUlzQixFQUFPN0IsRUFBU1MsVUFBVUYsRUFBRSxHQUFHLEVBQUVBLEVBQUUsR0FBRyxHQUMxQ1AsRUFBU2MsUUFBUVAsRUFBR3NCLEVBQ3hCLENBQ0osQ0FhQUosUUFBUUMsSUFBSTFCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3Ata25pZ2h0cy10cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYXkgbmVlZCBhZGphY2VuY3kgbGlzdCwgdmVuZXJhdGUgdGhlIGdyYXBoIHJhdGhlciB0aGFuIHRoZSB0cmVlXG5cbi8vIHdoYXQncyB3cm9uZyB3aXRoIG1lIHNlYXJjaGluZyBmb3Igd2hhdCB0byBkbz9cbi8vIGkgZG9uJ3Qga25vdyB3aGF0IHF1ZXN0aW9ucyB0byBhc2suLi4gaSdtIGJsaW5kZm9sZGVkXG5cbmNsYXNzIEdyYXBoIHtcbiAgICBjb25zdHJ1Y3RvcihudW1WZXJ0aWNlcykge1xuICAgICAgICB0aGlzLm51bVZlcnRpY2VzID0gbnVtVmVydGljZXM7XG4gICAgICAgIHRoaXMuQWRqTGlzdCA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBhZGRWZXJ0ZXgodikge1xuICAgICAgICB0aGlzLkFkakxpc3Quc2V0KHYsIFtdKVxuICAgIH1cblxuICAgIGdldFZlcnRleChjb2wsIHJvdykge1xuICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgdGhpcy5BZGpMaXN0KSB7XG4gICAgICAgICAgICBpZiAoY29sID09PSBrZXlbMF0gJiYgcm93ID09PSBrZXlbMV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFZGdlKHYsIHcpIHtcbiAgICAgICAgdGhpcy5BZGpMaXN0LmdldCh2KS5wdXNoKHcpO1xuICAgICAgICB0aGlzLkFkakxpc3QuZ2V0KHcpLnB1c2godik7XG4gICAgfVxuXG4gICAgcHJpbnRHcmFwaCgpIHtcbiAgICAgICAgbGV0IGdldEtleXMgPSB0aGlzLkFkakxpc3Qua2V5cygpO1xuICAgICAgICBmb3IgKGxldCBpIG9mIGdldEtleXMpIHtcbiAgICAgICAgICAgIGxldCBnZXRWYWx1ZXMgPSB0aGlzLkFkakxpc3QuZ2V0KGkpXG4gICAgICAgICAgICBsZXQgY29uYyA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBqIG9mIGdldFZhbHVlcykgY29uYyArPSBqICsgXCIgXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKGkgKyBcIiAtPiBcIiArIGNvbmMpO1xuICAgIH1cbn1cblxuXG5sZXQgbmV3R3JhcGggPSBuZXcgR3JhcGgoNjQpO1xuLy8gbWFrZSBhIG5lc3RlZCBhcnJheSBvZiBjb29yZGluYXRlcywgdXNpbmcgZG91YmxlIGZvciBsb29wXG5sZXQgdmVydGljZXMgPSBbXVxubGV0IHNpZGVMZW5ndGggPSA4XG5cbi8vIGl0J3MgZWFzaWVyIHRvIHdyaXRlIGNvZGUgdGhhbiB0byByZWFkIGNvZGVcblxuLy8gdGhpcyBwb3B1bGF0ZXMgdGhlIHZlcnRpY2VzIGFycmF5XG4vLyBzaG91bGQgJ2dpdmUnIDY0IGNvb3JkaW5hdGVzXG5mb3IgKGxldCBpID0gMDsgaSA8IHNpZGVMZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2lkZUxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBjb29yZHMgPSBbaSwgal1cbiAgICAgICAgdmVydGljZXMucHVzaChjb29yZHMpXG4gICAgfVxufVxuXG4vLyBhZGQgYWxsIHRoZXNlIHZlcnRpY2VzLCB0byBpbnNpZGUgdGhlIG9iamVjdFxuLy8gYWRkIGVkZ2UsIHVzaW5nIHNvbWV0aGluZy4uLiBmb3IgZWFjaCAsIGFkZCB0aGplIDggY29ycmVzcG9uZGluZywgaWYgdGhleSBleGlzdFxuXG5mb3IgKHYgb2YgdmVydGljZXMpIHtcbiAgICBuZXdHcmFwaC5hZGRWZXJ0ZXgodik7XG59XG5cblxuZm9yICh2IG9mIHZlcnRpY2VzKSB7XG4gICAgLy8gdHJ5IHRvIGFkZCB0aGUgcG9zc2libGUgbW92ZXMgZm9yIGVhY2ggdmVydGV4XG4gICAgLy8gdGVzdCBlYWNoIGNhc2UsIGZvciBpZiBvdXQgb2YgYm91bmRzXG4gICAgLy8gaWYgbm90IG91dCBvZiBib3VuZHMsIGFkZCB0aGUgZWRnZXNcbiAgICAvLyBnZXQgdGhlIHZlcnRleCB0aGF0IGNvcnJlc3BvbmRzIHRvIGl0IGZpcnN0XG4gICAgaWYgKHZbMF0rMiA8IDggJiYgdlsxXSsxIDwgOCkge1xuICAgICAgICBsZXQgbW92ZSA9IG5ld0dyYXBoLmdldFZlcnRleCh2WzBdKzIsdlsxXSsxKVxuICAgICAgICBuZXdHcmFwaC5hZGRFZGdlKHYsIG1vdmUpXG4gICAgfSBcblxuICAgIGlmICh2WzBdKzEgPCA4ICYmIHZbMV0rMiA8IDgpIHtcbiAgICAgICAgbGV0IG1vdmUgPSBuZXdHcmFwaC5nZXRWZXJ0ZXgodlswXSsxLHZbMV0rMilcbiAgICAgICAgbmV3R3JhcGguYWRkRWRnZSh2LCBtb3ZlKVxuICAgIH0gXG5cbiAgICBpZiAodlswXS0xID49MCAmJiB2WzFdKzIgPCA4KSB7XG4gICAgICAgIGxldCBtb3ZlID0gbmV3R3JhcGguZ2V0VmVydGV4KHZbMF0tMSx2WzFdKzIpXG4gICAgICAgIG5ld0dyYXBoLmFkZEVkZ2UodiwgbW92ZSlcbiAgICB9IFxuXG4gICAgaWYgKHZbMF0tMiA+PTAgJiYgdlsxXSsxIDwgOCkge1xuICAgICAgICBsZXQgbW92ZSA9IG5ld0dyYXBoLmdldFZlcnRleCh2WzBdLTIsdlsxXSsxKVxuICAgICAgICBuZXdHcmFwaC5hZGRFZGdlKHYsIG1vdmUpXG4gICAgfSBcblxuICAgIGlmICh2WzBdLTIgPj0wICYmIHZbMV0tMSA+PTApIHtcbiAgICAgICAgbGV0IG1vdmUgPSBuZXdHcmFwaC5nZXRWZXJ0ZXgodlswXS0yLHZbMV0tMSlcbiAgICAgICAgbmV3R3JhcGguYWRkRWRnZSh2LCBtb3ZlKVxuICAgIH0gXG5cbiAgICBpZiAodlswXS0xID49MCAmJiB2WzFdLTIgPj0wKSB7XG4gICAgICAgIGxldCBtb3ZlID0gbmV3R3JhcGguZ2V0VmVydGV4KHZbMF0tMSx2WzFdLTIpXG4gICAgICAgIG5ld0dyYXBoLmFkZEVkZ2UodiwgbW92ZSlcbiAgICB9IFxuXG4gICAgaWYgKHZbMF0rMSA8IDggJiYgdlsxXS0yID49MCkge1xuICAgICAgICBsZXQgbW92ZSA9IG5ld0dyYXBoLmdldFZlcnRleCh2WzBdKzEsdlsxXS0yKVxuICAgICAgICBuZXdHcmFwaC5hZGRFZGdlKHYsIG1vdmUpXG4gICAgfSBcblxuICAgIGlmICh2WzBdKzIgPCA4ICYmIHZbMV0tMSA+PTApIHtcbiAgICAgICAgbGV0IG1vdmUgPSBuZXdHcmFwaC5nZXRWZXJ0ZXgodlswXSsyLHZbMV0tMSlcbiAgICAgICAgbmV3R3JhcGguYWRkRWRnZSh2LCBtb3ZlKVxuICAgIH0gXG59XG5cbiAgICAvLyBpZiAodlswXSsyIDwgOCAmJiB2WzFdKzEgPCA4KSBuZXdHcmFwaC5hZGRFZGdlKHYsIFt2WzBdKzIsIHZbMV0rMV0pXG4gICAgLy8gaWYgKHZbMF0rMSA8IDggJiYgdlsxXSsyIDwgOCkgbmV3R3JhcGguYWRkRWRnZSh2LCBbdlswXSsxLCB2WzFdKzJdKVxuICAgIC8vIGlmICh2WzBdLTEgPj0wICYmIHZbMV0rMiA8IDgpIG5ld0dyYXBoLmFkZEVkZ2UodiwgW3ZbMF0tMSwgdlsxXSsyXSlcbiAgICAvLyBpZiAodlswXS0yID49MCAmJiB2WzFdKzEgPCA4KSBuZXdHcmFwaC5hZGRFZGdlKHYsIFt2WzBdLTEsIHZbMV0rMV0pXG5cbiAgICAvLyBpZiAodlswXS0yID49MCAmJiB2WzFdLTEgPj0wKSBuZXdHcmFwaC5hZGRFZGdlKHYsIFt2WzBdLTIsIHZbMV0tMV0pXG4gICAgLy8gaWYgKHZbMF0tMSA+PTAgJiYgdlsxXS0yID49MCkgbmV3R3JhcGguYWRkRWRnZSh2LCBbdlswXS0xLCB2WzFdLTJdKVxuICAgIC8vIGlmICh2WzBdKzEgPCA4ICYmIHZbMV0tMiA+PTApIG5ld0dyYXBoLmFkZEVkZ2UodiwgW3ZbMF0rMSwgdlsxXS0yXSlcbiAgICAvLyBpZiAodlswXSsyIDwgOCAmJiB2WzFdLTEgPj0wKSBuZXdHcmFwaC5hZGRFZGdlKHYsIFt2WzBdKzIsIHZbMV0tMV0pXG5cblxuY29uc29sZS5sb2cobmV3R3JhcGgpXG5cbi8vIHRoaXMgbWlnaHQgYmUgdGhlIHdyb25nIGFwcHJvYWNoLlxuLy8gbmVlZCB0byBiZSB0aGlua2luZyBvZiBncmFwaHMsIHRyZWVzLCBub2RlcywgYW5kIHJlY3Vyc2lvbiwgcmF0aGVyIHRoYW4gcGxhY2luZyBzdHVmZiBpbiBhIGdyaWRcbi8vIGp1c3QgbmVlZCBhIHN0YXJ0aW5nIHBvaW50LCB3aXRoaW4gYSBncmFwaD9cbi8vIGkgbmVlZCB0byB1bmRlcnN0YW5kIHJlY3Vyc2lvbiBpbiBhIGdyYXBoLCBmaXJzdFxuICAgIC8vIHRoZW4sIGkgbmVlZCB0byB0aGluayBhYm91dCB0aGUgbGlzdCBvZiBzdGVwcyBsaWtlIGEgdHJlZVxuXG4gICAgLy90aGlzIHNob3VsZCBiZSBsaWtlIGEgdHJlZVxuXG4gICAgLy8gdGhlIHdhcmVob3VzZVxuXG4gICAgLy8gdGhpcy51dXIgPSAoY29sKzIgPCA4IHx8IHJvdysxIDwgOCkgPyBuZXcgTm9kZShjb2wgKyAxLCByb3cgKyAyKSA6IG51bGxcbiAgICAvLyB0aGlzLnVyciA9IChjb2wrMSA8IDggfHwgcm93KzIgPCA4KSA/IG5ldyBOb2RlKGNvbCArIDIsIHJvdyArIDEpIDogbnVsbFxuICAgIC8vIHRoaXMuZHJyID0gKGNvbC0xIDwgOCB8fCByb3crMiA+IDApID8gbmV3IE5vZGUoY29sICsgMiwgcm93IC0gMSkgOiBudWxsXG4gICAgLy8gdGhpcy5kZHIgPSAoY29sLTEgPCA4IHx8IHJvdysxID4gMCkgPyBuZXcgTm9kZShjb2wgKyAxLCByb3cgLSAyKSA6IG51bGxcbiAgICAvLyB0aGlzLmRkbCA9IChjb2wtMiA+IDAgfHwgcm93LTEgPiAwKSA/IG5ldyBOb2RlKGNvbCAtIDEsIHJvdyAtIDIpIDogbnVsbFxuICAgIC8vIHRoaXMuZGxsID0gKGNvbC0xID4gMCB8fCByb3ctMiA+IDApID8gbmV3IE5vZGUoY29sIC0gMSwgcm93IC0gMikgOiBudWxsXG4gICAgLy8gdGhpcy51bGwgPSAoY29sKzEgPiAwIHx8IHJvdy0yIDwgOCkgPyBuZXcgTm9kZShjb2wgLSAyLCByb3cgKyAxKSA6IG51bGxcbiAgICAvLyB0aGlzLnV1bCA9IChjb2wrMiA+IDAgfHwgcm93LTEgPCA4KSA/IG5ldyBOb2RlKGNvbCAtIDEsIHJvdyArIDIpIDogbnVsbFxuXG4vLyBkbyBpIG5lZWQgdG8gY3JlYXRlIG5vZGVzLi4uXG5jbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb2wsIHJvdykge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gW2NvbCwgcm93XVxuICAgICAgICB0aGlzLmNvbCA9IGNvbFxuICAgICAgICB0aGlzLnJvdyA9IHJvd1xuXG4gICAgICAgIHRoaXMudXVyID0gbnVsbFxuICAgICAgICB0aGlzLnVyciA9IG51bGxcbiAgICAgICAgdGhpcy5kcnIgPSBudWxsXG4gICAgICAgIHRoaXMuZGRyID0gbnVsbFxuICAgICAgICB0aGlzLmRkbCA9IG51bGxcbiAgICAgICAgdGhpcy5kbGwgPSBudWxsXG4gICAgICAgIHRoaXMudWxsID0gbnVsbFxuICAgICAgICB0aGlzLnV1bCA9IG51bGxcblxuICAgICAgICAvLyBkbyBpIG5lZWQgdG8gY3JlYXRlIDggcG90ZW50aWFsIGNoaWxkcmVuP1xuXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gICAgfVxufVxuXG5jbGFzcyBtb3ZlR2VuZXJhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9jcmVhdGUgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgbW92ZXNcbiAgICAgICAgLy8gdGhpcy5zdGFydGluZ1Bvc2l0aW9uID0gXG4gICAgfVxufVxuXG4vLyBjb25zdCByb290ID0gbmV3IE5vZGUoMiwyKVxuXG4vLyBjb25zb2xlLmxvZyhyb290KVxuXG5jb25zdCBzdGFydGluZ1Bvc2l0aW9uID0gWzIsMl1cblxuLy8gdGhpcyBkb2Vzbid0IHdvcmsgaSB0aGlua1xuLy9wb3NpdGlvbiBpcyBhbiBhcnJheSBvZiBjb29yZGluYXRlc1xuZnVuY3Rpb24gY3JlYXRlR3JhcGgocG9zaXRpb24gPSBzdGFydGluZ1Bvc2l0aW9uKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKHBvc2l0aW9uWzBdLCBwb3NpdGlvblsxXSlcblxuICAgIC8vIHdoYXQgZG8gaSBkbyBoZXJlXG4gICAgLy8gZG8gaSBuZWVkIGEgcXVldWU/XG5cbiAgICAvLyBjcmVhdGUgOCByZWN1cnNpb25zXG4gICAgLy8gbmVlZCB0byBwYXNzIGluIGFycmF5IG9mIGNvb3JkaW5hdGVzXG5cbiAgICAvLyBpIG1heSBoYXZlIHRvIGRlbGV0ZSBjaGlsZCBub2Rlcy4gYnV0Li4uIHRoZSBpc3N1ZSBpcyBpIG5lZWQgYWxsIG9mIHRoZXNlXG5cbiAgICAvLyBtYXliZSBjYW4ndCBkbyBpdCB0aGlzIHdheVxuICAgIG5vZGUudXVyID0gKHBvc2l0aW9uWzBdKzIgPCA4ICYmIHBvc2l0aW9uWzFdKzEgPCA4KSA/IGNyZWF0ZUdyYXBoKFtwb3NpdGlvblswXSsyLCBwb3NpdGlvblsxXSsxXSkgOiBudWxsXG4gICAgbm9kZS51cnIgPSAocG9zaXRpb25bMF0rMSA8IDggJiYgcG9zaXRpb25bMV0rMiA8IDgpID8gY3JlYXRlR3JhcGgoW3Bvc2l0aW9uWzBdKzEsIHBvc2l0aW9uWzFdKzJdKSA6IG51bGxcbiAgICBub2RlLmRyciA9IChwb3NpdGlvblswXS0xID49IDAgJiYgcG9zaXRpb25bMV0rMiA8IDgpID8gY3JlYXRlR3JhcGgoW3Bvc2l0aW9uWzBdLTEsIHBvc2l0aW9uWzFdKzJdKSA6IG51bGxcbiAgICBub2RlLmRkciA9IChwb3NpdGlvblswXS0yID4gMCAmJiBwb3NpdGlvblsxXSsxIDwgOCkgPyBjcmVhdGVHcmFwaChbcG9zaXRpb25bMF0tMSwgcG9zaXRpb25bMV0rMV0pIDogbnVsbFxuXG4gICAgbm9kZS5kZGwgPSAocG9zaXRpb25bMF0tMiA+PSAwICYmIHBvc2l0aW9uWzFdLTEgPj0gMCkgPyBjcmVhdGVHcmFwaChbcG9zaXRpb25bMF0tMiwgcG9zaXRpb25bMV0tMV0pIDogbnVsbFxuICAgIG5vZGUuZGxsID0gKHBvc2l0aW9uWzBdLTEgPj0gMCAmJiBwb3NpdGlvblsxXS0yID49IDApID8gY3JlYXRlR3JhcGgoW3Bvc2l0aW9uWzBdLTEsIHBvc2l0aW9uWzFdLTJdKSA6IG51bGxcbiAgICBub2RlLnVsbCA9IChwb3NpdGlvblswXSsxIDwgOCAmJiBwb3NpdGlvblsxXS0yID49IDApID8gY3JlYXRlR3JhcGgoW3Bvc2l0aW9uWzBdKzEsIHBvc2l0aW9uWzFdLTJdKSA6IG51bGxcbiAgICBub2RlLnV1bCA9IChwb3NpdGlvblswXSsyIDwgOCAmJiBwb3NpdGlvblsxXS0xID49IDApID8gY3JlYXRlR3JhcGgoW3Bvc2l0aW9uWzBdKzIsIHBvc2l0aW9uWzFdLTFdKSA6IG51bGxcblxuICAgIHJldHVybiBub2RlXG59XG5cbi8vIGNvbnN0IGdyYXBoID0gY3JlYXRlR3JhcGgoKTtcbi8vIGNvbnNvbGUubG9nKGdyYXBoKVxuXG5cblxuXG4vLyBmdW5jdGlvbiBzdGFydGluZ1Bvc2l0aW9uKGNvbCwgcm93KSB7XG4vLyAgICAgaWYgKGNvbCA8IDAgfHwgY29sID4gNyB8fCByb3cgPCAwIHx8IHJvdyA+IDcpIHJldHVyblxuXG4vLyAgICAgLy8gd2hhdCBkbyBpIGRvIG5vd1xuXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZVBvdGVudGlhbE1vdmUoY29sLCByb3csIGNvbFNoaWZ0LCByb3dTaGlmdCkge1xuLy8gICAgIGlmIChjb2xTaGlmdCA+IDApIHtcbi8vICAgICAgICAgaWYgKGNvbCtjb2xTaGlmdCA8IDgpXG4vLyAgICAgfVxuXG4vLyB9XG4vLyBmdW5jdGlvbiBsaXN0TW92ZXMoY29sLCByb3cpIHtcbi8vICAgICAvL3Bvc3NpYmxlIG1vdmVzXG5cbi8vICAgICAvLyBkbyBpIHB1c2ggdGhlc2UgdG8gYSBxdWV1ZT8gaXMgbGlzdE1vdmVzIGEgcmVjdXJzaXZlIGZ1bmN0aW9uP1xuLy8gICAgIGlmIChjb2wrMSA8IDggfHwgcm93KzIgPCA4KSBjb2wgKyAxLCByb3cgKyAyXG4vLyAgICAgaWYgKGNvbCsxIDwgOCB8fCByb3crMiA8IDgpIGNvbCArIDIsIHJvdyArIDFcbi8vICAgICBpZiAoY29sKzEgPCA4IHx8IHJvdysyID4gMCkgY29sICsgMiwgcm93IC0gMVxuLy8gICAgIGlmIChjb2wrMSA8IDggfHwgcm93KzIgPiAwKSBjb2wgKyAxLCByb3cgLSAyXG4vLyAgICAgaWYgKGNvbCsxID4gMCB8fCByb3crMiA+IDApIGNvbCAtIDEsIHJvdyAtIDJcbi8vICAgICBpZiAoY29sKzEgPiAwIHx8IHJvdysyID4gMCkgY29sIC0gMSwgcm93IC0gMlxuLy8gICAgIGlmIChjb2wrMSA+IDAgfHwgcm93KzIgPCA4KSBjb2wgLSAyLCByb3cgKyAxXG4vLyAgICAgaWYgKGNvbCsxID4gMCB8fCByb3crMiA8IDgpIGNvbCAtIDEsIHJvdyArIDJcblxuLy8gfVxuXG4vLyAvLyBtYWtlIGNlbGwgb2JqZWN0IC8gY2xhc3Ncbi8vIGNsYXNzIENlbGwge1xuLy8gICAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgICAgICB0aGlzLnZpc2l0ZWQgPSBmYWxzZSBcbi8vICAgICB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZUdhbWVCb2FyZCgpIHtcbi8vICAgICBsZXQgYm9hcmQgPSBbXVxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cbi8vICAgICAgICAgbGV0IHJvdyA9IFtdXG4vLyAgICAgICAgIGJvYXJkLnB1c2gocm93KTtcbi8vICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcbi8vICAgICAgICAgICAgIHJvdy5wdXNoKG5ldyBDZWxsKVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgLy8gZG9lcyBpdCBtYWtlIHNlbnNlIHRoYXQgcm93IGFuZCBjb2x1bW4gYXJlIGluIHRoaXMgb3JkZXIuIGlzbid0IGl0IFxuLy8gICAgIC8vIGNvbHVtbiwgdGhlbiByb3c/XG4vLyAgICAgZnVuY3Rpb24gcGxhY2VQaWVjZShjb2wsIHJvdykge1xuLy8gICAgICAgICAvLyBzbyBjdXJyZW50bHksIHRoZSByb3dzIGFyZSBpbnZlcnRlZDsgdGhleSBzdGFydCBmcm9tIHRoZSB0b3Agbm90IHRoZSBib3R0b21cbi8vICAgICAgICAgYm9hcmRbOCAtIHJvd11bY29sXS52aXNpdGVkID0gdHJ1ZVxuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xuLy8gICAgICAgICByZXR1cm4gYm9hcmQ7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcGxhY2VQaWVjZSxcbi8vICAgICAgICAgZ2V0Qm9hcmQsXG5cbi8vICAgICB9O1xuLy8gfVxuXG5cbi8vIC8vIHNob3VsZCB0aGVyZSBiZSBhIGtuaWdodCBvYmplY3Q/IG9yIHNob3VsZCB0aGlzIGJlIGEgZ2FtZUNvbnRyb2xsZXI/XG4vLyBmdW5jdGlvbiBnYW1lQ29udHJvbGxlcigpIHtcbi8vICAgICBjb25zdCBuZXdCb2FyZCA9IGNyZWF0ZUdhbWVCb2FyZCgpXG4vLyAgICAgLy8gdGhpcyBtaWdodCBiZSB0ZXJyaWJsZSBjb2RlLCBpIG5lZWQgdG8gcmV2aXNpdCBidWlsZGluZyBhIGhvdXNlIGFydGljbGVcbi8vICAgICBmdW5jdGlvbiBzZXRTdGFydGluZ1Bvc2l0aW9uKGNvbCxyb3cpIHtcbi8vICAgICAgICAgbmV3Qm9hcmQucGxhY2VQaWVjZShjb2wsIHJvdylcbi8vICAgICAgICAgY29uc29sZS5sb2cobmV3Qm9hcmQuZ2V0Qm9hcmQoKSlcbi8vICAgICB9XG5cbi8vICAgICAvLyBpIG5lZWQgdG8gc2V0IGJvdW5kcy4uLiBzb21laG93Li4uIHNvIGtuaWdodCBkb2Vzbid0IG1vdmUgb3V0IG9mIHRoZSBncmlkXG4vLyAgICAgZnVuY3Rpb24gbGlzdE1vdmVzKHN0YXJ0aW5nUG9zaXRpb24pIHtcblxuXG4vLyAgICAgICAgIC8vIC4uLlxuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHNldFN0YXJ0aW5nUG9zaXRpb24sXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBsZXQgZ2FtZSA9IGdhbWVDb250cm9sbGVyKCk7XG4vLyBnYW1lLnNldFN0YXJ0aW5nUG9zaXRpb24oMSw0KVxuLy8gZnVuY3Rpb24ga25pZ2h0TW92ZXMoKSB7XG5cbi8vIH0iXSwibmFtZXMiOlsibmV3R3JhcGgiLCJjb25zdHJ1Y3RvciIsIm51bVZlcnRpY2VzIiwidGhpcyIsIkFkakxpc3QiLCJNYXAiLCJhZGRWZXJ0ZXgiLCJ2Iiwic2V0IiwiZ2V0VmVydGV4IiwiY29sIiwicm93Iiwia2V5IiwidmFsdWUiLCJhZGRFZGdlIiwidyIsImdldCIsInB1c2giLCJwcmludEdyYXBoIiwiZ2V0S2V5cyIsImtleXMiLCJpIiwiaiIsImdldFZhbHVlcyIsImNvbmMiLCJjb25zb2xlIiwibG9nIiwidmVydGljZXMiLCJjb29yZHMiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==