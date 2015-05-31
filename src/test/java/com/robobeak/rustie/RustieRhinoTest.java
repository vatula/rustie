package com.robobeak.rustie;

import org.junit.Test;
import org.mozilla.javascript.typedarrays.NativeUint8Array;

public class RustieRhinoTest {
    @Test
    public void testRhino() {
        final NativeUint8Array arr = new NativeUint8Array();
        org.junit.Assert.assertNotNull(arr);
        org.junit.Assert.assertEquals(true, true);
    }
}
