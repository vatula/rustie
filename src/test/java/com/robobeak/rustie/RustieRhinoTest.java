package com.robobeak.rustie;

import org.junit.Test;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.typedarrays.NativeUint8Array;

import java.nio.file.Files;

public class RustieRhinoTest {
    @Test
    public void testRhino() {
        final NativeUint8Array arr = new NativeUint8Array();
        final Context ctx = Context.enter();
        final Scriptable scope = ctx.initStandardObjects();
//        ctx.evaluateReader(scope, Files.readAllLines(""))
        org.junit.Assert.assertEquals(true, true);
    }
}
